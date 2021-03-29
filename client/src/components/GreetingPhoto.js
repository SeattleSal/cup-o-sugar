import React from 'react';
import { Container } from 'react-bootstrap';
import neighborCutOut from '../assets/neighborCutOut.jpeg';


function GreetingPhoto () {

    return (

        <Container>

        <div style={{display:"flex", justifyContent:"center"}}>

            <img src={neighborCutOut} alt="Paper people and house" style={{width: "100%", justifyContent: "center", marginBottom:"1rem", borderRadius:"8px"}} />

        </div>
        </Container>
       
       
    );
};

export default GreetingPhoto;