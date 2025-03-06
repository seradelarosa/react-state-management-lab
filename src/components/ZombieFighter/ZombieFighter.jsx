const ZombieFighter = ({fighter, handleAddFighter, handleRemoveFighter, showAddButton, showRemoveButton}) => {

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
            {/* Show remove button if the fighter is on the team */}
            {showRemoveButton && (
                <button onClick={()=> handleRemoveFighter(fighter)}>Remove</button>
            )}
        </li>
    );
};

export default ZombieFighter;