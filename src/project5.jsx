import { useState } from "react";
import "./project5.css";

const initialFriends = [
  {
    id: 118836,
    name: "Peace",
    image: "src/assets/80c550382a7c49ba86111a165008da20.jpg",
    balance: -5000,
  },
  {
    id: 933372,
    name: "Efosa",
    image: "src/assets/IMG_20220617_152127.jpg",
    balance: 2000,
  },
  {
    id: 499476,
    name: "Taiwo",
    image: "src/assets/teeboss.jpg",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function Project5() {
  const [friends, setFriends] = useState(initialFriends);
  const [addFriend, setAddFriend] = useState(false);
  const [showBill, setShowBill] = useState(null);
  const [showTip, setShowTip] = useState(false);

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setAddFriend(false);
    setShowBill(null);
  }

  function handleSelection(friend) {
    setShowBill((cur) => (cur?.id === friend.id ? null : friend));
    setAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === showBill.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setShowBill(null);
  }
  const totalNegativeBalance = friends.reduce((acc, friend) => {
    if (friend.balance < 0) {
      return acc + friend.balance;
    }
    return acc;
  }, 0);

  const totalPositiveBalance = friends.reduce((acc, friend) => {
    if (friend.balance > 0) {
      return acc + friend.balance;
    }
    return acc;
  }, 0);

  function clearList() {
    const length = initialFriends.length;
    if (length > 0) {
      setFriends([]);
      setShowBill(null);
    }
  }

  function removeFriend(friend) {
    setFriends((cur) => cur.filter((curFriend) => curFriend.id !== friend.id));
    setShowBill(null);
  }
  function showAddFriend() {
    setShowBill(null);
    setAddFriend((f) => !f);
  }

  function showTips() {
    setShowTip((f) => !f);
  }

  return (
    <>
      <div className="title">
        <Title />
      </div>
      <div className="app">
        <div className="sidebar">
          <FriendsList
            friends={friends}
            onSelect={handleSelection}
            showBill={showBill}
            onRemove={removeFriend}
          />

          {addFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

          <div className="clearList">
            {friends.length <= 2 && (
              <Button onClick={showAddFriend}>
                {addFriend ? "Close" : "Add Friend"}
              </Button>
            )}

            <Button onClick={clearList}>Clear List</Button>
          </div>
        </div>

        {showBill && (
          <FormSplitBill
            showBill={showBill}
            onShowTip={showTips}
            showTip={showTip}
            onSplitBill={handleSplitBill}
            key={showBill.id}
          />
        )}
        <Footer
          onFooter={totalNegativeBalance}
          onPositive={totalPositiveBalance}
        />

        <div className="copyright">Fet</div>
      </div>
      {/* {showTip && <Tip />} */}
    </>
  );
}

function Title() {
  return <h1 className="title-text">Bill Splitter</h1>;
}

function Footer({ onFooter, onPositive }) {
  return (
    <div className="footer">
      <h4>
        You are expecting a total amount of{" "}
        <span className="green">₦{onPositive}</span> from your friends.{" "}
      </h4>
      <h4>
        You are owing your friends a total of{" "}
        <span className="red">₦{-onFooter}</span>.
      </h4>
      <p className={onPositive - Math.abs(onFooter) >= 0 ? "green" : "red"}>
        {" "}
        <span className="balance">BALANCE</span>: You have a total balance of ₦
        {onPositive - Math.abs(onFooter)}{" "}
      </p>
    </div>
  );
}

function FriendsList({ friends, onSelect, onRemove, showBill }) {
  return (
    <ul>
      <h3 className="hthree">Friends</h3>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelect={onSelect}
          showBill={showBill}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelect, onRemove, showBill }) {
  const isSelected = showBill?.id === friend.id;
  return (
    <>
      <li className={isSelected ? "selected" : " "}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>

        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} ₦{Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you ₦{Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}

        <Button onClick={() => onSelect(friend)}>
          {isSelected ? "Close" : "Select"}
        </Button>
        <Button onClick={() => onRemove(friend)}>Delete</Button>
      </li>
    </>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [sex, setSex] = useState("male");
  const [name, setName] = useState("");
  const [image, setImage] = useState("src/assets/male-staff-03.jpg");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = Date.now();
    // crypto.randomUUID()
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id: Date.now(),
    };

    onAddFriend(newFriend);

    setName("");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👬 Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🌆 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <select
        value={sex}
        onChange={(e) => {
          setSex(e.target.value);
          setImage(
            e.target.value === "male"
              ? "src/assets/male-staff-03.jpg"
              : "src/assets/female-staff-02.jpg"
          );
        }}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ showBill, onSplitBill, onShowTip, showTip }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const paidByFriend = bill ? Number(bill) - Number(paidByUser) : "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {showBill.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
      <label>🕴 Your expense</label>
      <input
        type="number"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > Number(bill) ? paidByUser : e.target.value
          )
        }
      />
      <label>👬 {showBill.name}'s expense</label>
      <input
        type="text"
        disabled
        style={{ border: "2px solid #ff922b" }}
        value={paidByFriend}
      />
      <label>🤑 Who is paying the bills</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{showBill.name}</option>
      </select>
      <div className="tip-section">
        <Button type="button" onClick={onShowTip}>
          {showTip ? "Close" : "Add Tip"}
        </Button>
        <Button type="submit">Split bill</Button>
      </div>
      {showTip && <Tip input={bill} name={showBill.name} />}
        
    </form>
  );
}
//////////////////////////////// ADD TIP COMPONENT ////////////////////////////////////////

function Tip({ name, input }) {
  // const [input, setInput] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const calc = Math.floor(input * ((percentage1 + percentage2) / 2 / 100));

  return (
    <div className="container1">
      <h2 className="title1">TIP GENERATOR</h2>
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did {name} like the service?
      </SelectPercentage>
      <Output bill={input} result={calc} />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div className="input1">
      <h1 className="label1">{children}</h1>

      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
        className="select"
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (25%)</option>
        <option value="10">It was good(50%)</option>
        <option value="20">Absolutely amazing(100%)</option>
      </select>
    </div>
  );
}

function Output({ bill, result }) {
  console.log(bill);
  return (
    <>
      <div className="footer1">
        <p className="label1">
          Amount: ${bill} (Normal amount) + ${result} (Tip for good services)
        </p>
        <p className="label1">
          Total amount: You're to pay
          <span
            className=" label1"
            style={{ fontWeight: "bold", fontSize: "15px" }}
          >
            ${bill + result}
          </span>{" "}
          in total.
        </p>
      </div>
    </>
  );
}
