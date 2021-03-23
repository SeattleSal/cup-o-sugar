import React from 'react';
import { Container } from 'react-bootstrap';
import handshakeBugs from '../assets/handshakeBugs.png';



function GreetingPhoto () {

    return (

        <div style={{display:"flex", justifyContent:"center", marginLeft:".75rem"}}>

            <img src={handshakeBugs} style={{width: "75%", justifyContent: "center", marginBottom:"1rem"}} />

        </div>
       
       
    );
};

export default GreetingPhoto;