import React from 'react';
import { Container } from 'react-bootstrap';

// import questionTiles from '../assets/questionTiles.jpeg';
import questionTiles from '../assets/tinifiedImages/questionTiles.jpeg';


function HowItWorksImage() {

    return (

        <Container>

            <div style={{ display: "flex", justifyContent: "center" }}>

                <img src={questionTiles}  alt="Question mark on broken tiles" style={{ width: "100%", justifyContent: "center", marginBottom: "1rem", borderRadius: "8px" }} />

            </div>
        </Container>

    );
};

export default HowItWorksImage;