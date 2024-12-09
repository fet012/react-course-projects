import { useState } from "react";
import "./Palmpay.css";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsEyeSlash, BsEyeSlashFill } from "react-icons/bs";
import { FaBuildingColumns } from "react-icons/fa6";

export default function Palmpay() {
  return (
    <>
      <Navbar />
      <Banner />
      <TransferBanner />
    </>
  );
}

function Login() {
  const [userName, setUserName] = useState("");
  const [login, setLogin] = useState("false");
  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
    </div>
  );
}

function Navbar() {
  return (
    <div className="intro">
      <div>
        <img src="src/assets/Capture2.JPG" alt="" />
      </div>
      <div>
        <h1>
          <b>Hi, User</b>
        </h1>
        <p className="welcome-text">Welcome, let's make payments!</p>
      </div>
      <div className="icons">
        <TfiHeadphoneAlt size={20} style={{ marginTop: 4 }} />
        <div className="notifications">
          <span className="badge"> 99+</span>
          <IoIosNotificationsOutline size={29} />
        </div>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <Container className="main-banner">
      <div className="banner">
        <div className="banner-top">
          <div className="verification-icon">✅</div>
          <p>Available Balance </p>
          <BsEyeSlash style={{ marginTop: 3 }} />
          <div className="trans-history">
            <p>Transaction History </p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <Balance />
          <Button style={{ marginTop: 5 }}>Add Money</Button>
        </div>
      </div>
      <div className="banner-footer">
        <p>
          Earn
          <span>
            <b> 20% </b>
          </span>
          interest with your idle funds.
          <span>
            <b> Earn now →</b>
          </span>
        </p>
      </div>
    </Container>
  );
}
function Balance() {
  return (
    <h1 className="amount">
      <b>****</b>
    </h1>
  );
}

function TransferBanner() {
  return (
    <Container className="transfer-banner">
      <h1 style={{ marginLeft: 20, marginTop: 10 }}>
        <b>Money Transfer</b>
      </h1>
      <div className="flex flex-row mt-3">
        <div className=" w-1/3 flex justify-center items-center text-white">
          <div className="trsf">
            {" "}
            <FaBuildingColumns size={28} color="#6431ff" />
            <div><span>0</span> fee</div>
          </div>
        </div>

        <div className="w-1/3 flex justify-center items-center ">
          <FaBuildingColumns size={25} color="#6431ff" />
        </div>

        <div className=" w-1/3 flex justify-center items-center">
          <FaBuildingColumns size={25} color="#6431ff" />
        </div>
      </div>
    </Container>
  );
}

function Container({ children, style, className }) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

function Button({ children, onClick, style }) {
  return (
    <button className="button" style={style} onClick={onClick}>
      {children}
    </button>
  );
}
