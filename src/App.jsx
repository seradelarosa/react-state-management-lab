import './App.css';
import { useState } from 'react';
import ZombieFighter from './components/ZombieFighter/ZombieFighter.jsx';

// changed to allZombieFighters to show that these are the initial fighters
const allZombieFighters = [
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
]

const App = () => {
  // create team state variable with initial state as an empty array
  const [teamState, setTeamState] = useState([]);
  // Create a new state variable named money and set the initial state to 100
  const [money, setMoney] = useState(100);
  // turn zombieFighters into state so it can be updated when a fighter is added
  const [zombieFighters, setZombieFighters] = useState(allZombieFighters);

  // use reduce to iterate through team array and accumulate to a single strength value
  // start with 0 as initial value
  // add each fighter's strength to the total
  // reduce((accumulator, currentValue) => {operation}, initialValue)
  // accumulator keeps track of running sum
  // currentValue represents the current fighter object as reduce loops through
  // operation
  // second argument: initial value of 0
  const totalStrength = teamState.reduce((total, fighter) => total + fighter.strength, 0);
  const totalAgility = teamState.reduce((total, fighter) => total + fighter.agility, 0);

  const handleAddFighter = (selectedFighter) => {
    //first check if they can afford the fighter's services lol
    if (money < selectedFighter.price) {
      console.log("Not enough money");
      return;
    }

    //subtract fighter price from money
    setMoney(money - selectedFighter.price);
    //duplicate current teamState, add the fighter to it, and set that as the new teamState
    setTeamState([...teamState, selectedFighter]);
    // keeps all fighters except the one the user just selected
    // filtering through the current zombieFighters array
    // check every fighter to make sure the fighter id is NOT the same as the selectedFighter.idd
    // Take every fighter with ids that do not match the selectedFighter.id and set that as the new zombieFighters state
    // for each fighter, if it meets this criteria, (fighterInArray.id !== selectedFighter.id), it keeps it
    setZombieFighters(zombieFighters.filter(fighterInArray => fighterInArray.id !== selectedFighter.id));
  };

  const handleRemoveFighter = (selectedFighter) => {
    // refund the cost of the fighter by increasing the money state
    setMoney(money + selectedFighter.price);

    // remove the selected fighter from teamState
    //create a new array that excludes the selectedFighter from the teamState
    setTeamState(teamState.filter(fighterInTeam => fighterInTeam.id !== selectedFighter.id));

    // add the fighter back to the zombieFighters array
    setZombieFighters([...zombieFighters, selectedFighter]);
  };

  return (
    <>
      <p>Your money: {money}</p>

      <h2>Fighters:</h2>

      <ul>
        {/* map through fighters and pass handleAddFighter so jsx can use Add button */}
        {zombieFighters.map((fighter) => (
          <ZombieFighter
            key={fighter.id}
            fighter={fighter}
            handleAddFighter={handleAddFighter}
            // show add button
            showAddButton={true}
            showRemoveButton={false}
          />

        ))}
      </ul>

      <h2>Your Team:</h2>

      {/* TODO: run a check to see if the user has any fighters. */}
      {/* if there are none, prompt the user to add some fighters. */}
      {teamState.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {/* map through fighters in your teamState */}
          {teamState.map(fighter => (
            <ZombieFighter
              key={`team-${fighter.id}`}
              fighter={fighter}
              //pass ability to remove a fighter to use in remove button
              handleRemoveFighter={handleRemoveFighter}
              // disable the sdd button since they are already in the team
              showAddButton={false}
              showRemoveButton={true}
            />
          ))}
        </ul>
      )
      }

      <h3>Total Strength: {totalStrength} </h3>
      <h3>Total Strength: {totalAgility} </h3>

    </>
  );
}

export default App;
