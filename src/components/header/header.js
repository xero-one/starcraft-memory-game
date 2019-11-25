/*Imports section for our React*/
import React from 'react';
import "./header.css";
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';


/*Define the pop up instructions for instructions with a constant function*/
const popoverLeft = (
    <Popover id="popover-positioned-left">
        <strong>Game Instructions</strong><br/>
        Click on a Starcraft hero to earn points, but don't select a hero more than once!
    </Popover>
);

/*Define the header static components with a constant function*/
const Header = props => (
    <header className="header row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 text-center">
            <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
                <Button className="logo-button btn-dark">
                    <img src="../assets/images/sc-logo.svg" className="bobs-burgers" alt="Clicky Starcraft Game"/>
                </Button>
            </OverlayTrigger>
        </div>
        <div className="col-lg-3"></div>
    </header>
)
/*Export the header directory from here*/
export default Header;