import React from "react";
import "./App.css";
import teamData from "./CollegeBasketballTeams.json";

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

const teamNames: TeamProps[] = teamData.teams;

function TeamList() {
  return (
    <div className="TeamList">
      {teamNames.map(function (teamnum) {
        return <Team {...teamnum} key={teamnum.tid} />;
      })}
    </div>
  );
}

function Welcome() {
  return (
    <div className="Welcome">
      <h1>College Basketball Teams</h1>
      <h2>This website lists all NCAA Basketball Teams</h2>
    </div>
  );
}

function Team(props: TeamProps) {
  const { school, name, city, state } = props;
  return (
    <div className="Team">
      <h3>{school} {name}</h3>
      <h4>{city}, {state}</h4>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
