/*Imports section for our React*/
import React from 'react';
import "./main.css";

/*Define the the main controllers with a constant function*/
const Main = props => (
    <main className={`${props.shake}`}>
        <div className="gif">
            <button className={`btn btn-link ${props.volumeOn}`} onClick = {() => { props.volume(); }}>
                <i className={`fas fa-volume-up fa-4x volume-icon`}></i>
            </button>
            <button className={`btn btn-link`} onClick = {() => { props.volume(); }}>
                <i className={"fas fa-volume-off fa-4x volume-icon"}></i>
            </button>
        </div>
        <div className="container">
            {props.children}
        </div>
       <div className="blank-div-1">
       </div>
    </main>
)
/*Export the main directory from here*/
export default Main;