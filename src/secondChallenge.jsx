import "./challenge2.css";
const skills = [
  {
    skill: "HTML + CSS",
    level: "Advanced",
    color: "#2662EA",
  },
  {
    skill: "Javascript",
    level: "Advanced",
    color: "#EFD81D",
  },
 
  {
    skill: "Git and Github",
    level: "Intermidiate",
    color: "#E84F33",
  },
  {
    skill: "Svelte",
    level: "Beginner",
    color: "#FF3B00",
  },
];

function Challenge2() {
  return (
    <>
      <div className="container">
        <div className="card">
          <Avatar />
          <div>
            {/*CONTAINS MY NECESSARY INFORMATION */}
            <Intro
              name=" Falola Temidayo"
              Introduction=" Full Stack web developer, aspiring to be a better programmer, I code all day long... and I also love to read my Bible."
            />

            <Skilllist />
          </div>
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
      <div className="skill-list">
        {skills.map((skill) => (
          <Skill
            skill={skill.skill}
            color={skill.color}
            level={skill.level}
          />
        ))}
      </div>
    </>
  );
}

function Skill({skill, color, level}) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "Beginner" && "😀"}
        { level === "Intermidiate" && "😁"}
        {level === "Advanced" && "😉"}

      </span>
    </div>
  );
}

export default Challenge2;
