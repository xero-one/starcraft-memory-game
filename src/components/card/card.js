import React from "react";
import "./card.css";

/*Define the card static components with a constant function */
const Card = props => (
    <div className="click-item neutral" onClick = {() => { props.increment(props.id); props.shuffle(props.id); }}>

        <img className="card-image" src={props.image} alt={props.name}/>
        
    </div>
);

/*Export card code to react app config*/
export default Card;