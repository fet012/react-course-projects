import "./challenge1.css";

export default function Challenge() {
  return (
    <>
      <div className="card">
        <Avatar />
        <div>
          {/* Contains my necessary Information */}
          <Intro
            name=" Falola Temidayo"
            Introduction=" Full Stack web developer, aspiring to be a better programmer, I code all day long... and I also love to read my Bible."
          />

          <Skilllist />
        </div>
      </div>
    </>
  );
}

function Avatar() {
  return <img src="src/assets/male-staff-03.jpg" alt="" />;
}

function Intro(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.Introduction}</p>
    </>
  );
}

function Skilllist() {
  return (
    <>
      <div>
        <Skill skill="Javascript" emoji="😉" color="red" />
        <Skill skill="React" emoji="😀" color="green" />
        <Skill skill="HTML" emoji="😁" color="blue" />
        <Skill skill="CSS" emoji="😄" color="grey" />
      </div>
    </>
  );
}

function Skill(data) {
  return (
    <div className="skill" style={{ backgroundColor: data.color }}>
      <span>{data.skill}</span>
      <span>{data.emoji}</span>
    </div>
  );
}
