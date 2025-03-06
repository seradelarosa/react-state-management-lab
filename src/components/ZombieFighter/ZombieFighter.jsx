const ZombieFighter = ({fighter, handleAddFighter}) => {

    return (
        <li>
            {fighter.img},
            <h3>Name: {fighter.name}</h3>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick= {() => handleAddFighter(fighter)}>Add</button>
        </li>
    );
};

export default ZombieFighter;