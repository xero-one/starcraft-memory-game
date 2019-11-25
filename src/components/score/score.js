/*Imports section for our React*/
import React from 'react';
import "./score.css";

/*Define the the score controller and static elements with a constant function*/
const Score = props => (
    <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-4">

            <button id={props.shake} className={`btn btn-block btn-score btn-${props.alertType}`}>
                <h3>Score <span className="badge">{props.score}</span></h3>
            </button>
            
        </div>

        <div className="col-lg-4">
            <button className={`btn btn-block btn-score btn-${props.topScoreType}`}>
                <h3>Top Score <span className="badge">{props.topScore}</span></h3>
            </button>
        </div>
        <div className="col-lg-2"></div>
    </div>
)
/*Export the Score props from here*/
export default Score;