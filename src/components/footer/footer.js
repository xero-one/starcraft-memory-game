/*Imports section for our React, this is basically like our routing to render our footer*/
import React from 'react';
import "./footer.css";

/*Define the footer static components with a constant function*/
const Footer = props => (
    <table>
        <tbody>
            <tr>
                <td className="align-middle">
                    <a href="https://npmjs.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-npm fa-2x"></i>
                    </a>
                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-react fa-2x"></i>
                    </a>
                    <a href="https://github.com/bxxdyz/clicky-game" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    <div className="spacer"></div>
                    BXXDYZ 2019 ©
                </td>
            </tr>
        </tbody>
    </table>
)

/*Export the card directory from here*/
export default Footer;