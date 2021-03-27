import React from 'react';
import { Container } from 'react-bootstrap';
import handshakeBugs from '../assets/handshakeBugs.png';
import sugardish from '../assets/sugardish.jpg';
import sugarheart from '../assets/sugarheart.jpg';
import sugarspoons from '../assets/sugarspoons.jpg';
import neighborCutOut from '../assets/neighborCutOut.jpeg';


function GreetingPhoto () {

    return (

        <Container>

        <div style={{display:"flex", justifyContent:"center"}}>

            <img src={neighborCutOut} style={{width: "100%", justifyContent: "center", marginBottom:"1rem", borderRadius:"8px"}} />

        </div>
        </Container>
       
       
    );
};

export default GreetingPhoto;