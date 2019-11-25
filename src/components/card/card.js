/*Imports section for our React, this is basically like our routing to render our cards*/
import React from "react";
import "./card.css";

/*Define the Card static components with a constant function*/
const Card = props => (
    
    <div className="row">
  
    <div className="click-item neutral vcenter" onClick = {() => { props.increment(props.id); props.shuffle(props.id); }}>

        <img className="card-image" src={props.image} alt={props.name}/>

    </div>
    <div className="col-lg-2"></div>

    </div>
);

/*Export Card code to react app config*/
export default Card;