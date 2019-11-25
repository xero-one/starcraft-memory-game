/*Imports section for our React, this is basically like our routing to render our footer*/
import React from 'react';

/*Imports section for our React, this is basically like our routing to render our alerts*/
import './alerts.css';
import Alert from 'react-bootstrap/Alert';

/*Define the Alerts static components with a constant function*/
const Alerts = props => (
    <Alert bsStyle={`${props.alertType}`}>
        <h3>
            <strong>{props.message1}</strong> {props.message2}
        </h3>
    </Alert>
);
/*Export Alerts code to react app config*/
export default Alerts;