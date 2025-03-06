const ZombieFighter = ({fighter, handleAddFighter, showAddButton}) => {

    return (
        <li>
            <img src={fighter.img}/>
            <h3>Name: {fighter.name}</h3>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            {/* Show the button only when showAddButton is true */}
            {showAddButton && (
                <button onClick={() => handleAddFighter(fighter)}>Add</button>
            )}
        </li>
    );
};

export default ZombieFighter;