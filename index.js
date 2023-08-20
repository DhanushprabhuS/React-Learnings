import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://www.hindustantimes.com/ht-img/img/2023/08/10/1600x900/jailer_release_live_updates_1691650467591_1691650467814.jpeg"
      alt="avatar"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Rajinikanth</h1>
      <p>
        Also spelled Rajnikant, original name Shivaji Rao Gaikwad, (born
        December 12, 1950, Bangalore, Mysore [now Bengaluru, Karnataka], India),
        Indian actor whose unique mannerisms and stylized line delivery made him
        one of the Top leading stars of Tamil cinema. He is know as Super Star
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Acting" emoji="👑" color="red" />
      <Skill skill="Style" emoji="⚡" color="blue" />
      <Skill skill="Never Giveup" emoji="🐎" color="green" />
      <Skill skill="Sprituality" emoji="🕉️" color="yellow" />
      <Skill skill="BO King" emoji="🚀" color="orange" />
      <Skill skill="Super Star" emoji="💯" color="pink" />
      <Skill skill="Simplicity" emoji="❤️" color="violet" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
