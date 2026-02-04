import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

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
      <span className="skill" style={{ backgroundColor: "red" }}>
        Rust+Cpp 💪
      </span>
      <span className="skill" style={{ backgroundColor: "skyblue" }}>
        JavaScript 🌏
      </span>
      <span className="skill" style={{ backgroundColor: "lightgreen" }}>
        Github 💪
      </span>
      <span className="skill" style={{ backgroundColor: "yellow" }}>
        Electron ⚛️
      </span>
      <span className="skill" style={{ backgroundColor: "pink" }}>
        Algorithm 🧬
      </span>
      <span className="skill" style={{ backgroundColor: "blue" }}>
        Web Design 👦
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
