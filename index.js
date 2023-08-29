import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://static.moviecrow.com/gallery/20221212/209593-FotoJet%20(10).jpg"
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
        one of the Top leading stars of Tamil cinema. He is know as{" "}
        <b>Super Star</b>
      </p>
    </div>
  );
}

const skillData = [
  {
    skill: "Acting",
    emoji: "👑",
    color: "red"
  },
  {
    skill: "Style",
    emoji: "⚡",
    color: "skyblue"
  },
  {
    skill: "Never Giveup",
    emoji: "🐎",
    color: "green"
  },
  {
    skill: "Sprituality",
    emoji: "🕉️",
    color: "yellow"
  },
  {
    skill: "BO King",
    emoji: "🚀",
    color: "orange"
  },
  {
    skill: "Super Star",
    emoji: "💯",
    color: "pink"
  },
  {
    skill: "Simplicity",
    emoji: "❤️",
    color: "violet"
  }
];

function SkillList() {
  return (
    <div className="skill-list">
      {skillData.length > 0 &&
        skillData.map((skillObj) => (
          <Skill
            skill={skillObj.skill}
            emoji={skillObj.emoji}
            color={skillObj.color}
          />
        ))}
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
    <App />
  </StrictMode>
);
