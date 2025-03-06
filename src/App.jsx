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

  // TODO: update handleAddFighter to remove a fighter that's been added to the team
  // TODO: use filter() to create a new array without the selected fighter
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
          />

        ))}
      </ul>

      <h2>Your Team:</h2>
      <ul>
        {/* map through fighters in your teamState */}
        {teamState.map(fighter => (
          <ZombieFighter
          // creating a unique id that's more specific since fighter is the same
            key={`team-${fighter.id}`}
            fighter={fighter}
          />
        ))}
      </ul>

    </>
  );
}

export default App;
 
// Now that you can add characters to your team let’s focus on displaying and managing them within your application’s interface.
// First, verify if your team array has any characters in it. If the team array length is 0, display Pick some team members! in the UI.
// If there are characters in your team, display each one in the UI. 
// For each character in the team array, show their name, image, price, strength, and agility. Follow the same pattern you used to display the array of all characters.

// Display the team’s total strength: In this step, you’ll create a variable to keep track of the total strength of your team and display it in the UI.
// Create a regular variable named totalStrength. This does not need to be a state variable.
// Calculate the total strength of the team and assign it to the totalStrength variable. 
// This calculation should sum up the strength values of all characters currently on the team!
// Show the value of totalStrength in the UI. If the team array is empty, totalStrength should be 0.

// 🧠 Why doesn’t totalStrength need to be a state variable? 
// Recall that every time a component is re-rendered in React, the code in that component re-runs. 
// When the component re-renders, we can calculate the total strength of the team based on the data from the team state at that time.
// If the team state changes, a re-render will be triggered, and totalStrength will be recalculated with the new team data.
// Put another way, the only reason to create state variables is to use them to trigger re-renders or persist data between re-renders. 
// Creating unneeded state variables only serves to add unnecessary complications.

// With this in mind, what value are we holding in state now that could also be a regular variable? 
// You don’t need to refactor your existing code to remove it from state - just identifying it is valuable.

// Display the team’s total agility: Create a variable for the total agility of your team and display this value in the UI.
// Create a variable named totalAgility. Just like with totalStrength, this should not be a state variable.
// Just like with strength, calculate the total agility of the team and assign it to the totalAgility variable. 
// This should be the sum of the team members’ agility values.
// The value of totalAgility should be displayed in the UI. As with strength, if your team is empty, totalAgility will be 0.
// Add a Remove button to each of the characters on your team. 
// This button, when clicked, should call a handler function to remove the character from your team.

// Create a function named handleRemoveFighter(). It should accept a fighter object as an argument. 
// This handler function is key to managing your team. 
// This function enables you to remove characters and adjust your total money.
// This function will be executed when you click the Remove button for a character in your team.
// In the function, determine which character needs to be removed based on user interaction 
// (This will look very similar to what you did in the handleAddFighter() function).
// Once the character to be removed is identified, the team state should be updated to exclude this character. 
// This can be achieved by creating a new array that filters out the selected character. 
// Once you have the new array, use it to set the team state.

// The character that was removed from the team state should be added to the zombieFighters array.
// Increase the money state by the price of the removed character, effectively refunding the cost to your budget.
// Ensure that the UI reflects the removal of the character from your team. 
// This includes updates to the total strength and agility displays, as well as the available money.


// Hints
// You should never change state directly. If you need to make a copy of an array, you can use the syntax const copyArray = [...sourceArray].
// You can use any method you’d like to get the total strength and agility of the team - the array’s reduce() method may be handy here, but any loop that will find the sum of these attributes will work.
// Optionally, if you want to add some polish to the app, you could replace the placeholder images with character images. An AI assistant may be helpful in this task.
// Optionally, you could also make it so a message displays in the browser when there isn’t enough budget to add a team member.




