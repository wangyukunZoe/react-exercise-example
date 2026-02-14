import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import skills from "./skilldata";

const aboutMe = [
  {
    myName: "yukun Wang",
    myAvatar: "profile.jpg",
    profileContent:
      "Full-stack web developer and Rust/C++ engineer.When not coding or preparing the Postgraduate Entrance Exam, I like to listen to English TV program, or to enjoy the TangShan's sunshine at the ground.",
    mySkill: "Rust+Cpp 💪",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar myAvatar="profile.jpg" />
      <div className="data">
        <Intro
          myName="Yukun wang"
          profileContent="Full-stack web developer and Rust/C++ engineer.When not coding or
        preparing the Postgraduate Entrance Exam, I like to listen to English TV
        program, or to enjoy the TangShan's sunshine at the ground."
        />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <main className="avatar">
      <img src={props.myAvatar} alt="intro" />
    </main>
  );
}

function Intro(props) {
  return (
    <div>
      <h1>{props.myName}</h1>
      <p>{props.profileContent}</p>
    </div>
  );
}

function SkillList() {
  const style = {};

  return (
    <div className="skill-list ">
      {skills.map((mySkill) => (
        <SkillItem
          skillObj={mySkill}
          key={mySkill.skill}
          className="skill"
          color={mySkill.color}
          level={mySkill.level}
        />
      ))}
    </div>
  );
}

function SkillItem({ skillObj, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skillObj.skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "advanced" && "💪"}
        {level === "intermediate" && "👍"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
