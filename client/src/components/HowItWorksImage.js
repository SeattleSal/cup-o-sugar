import React from 'react';
import { Container } from 'react-bootstrap';

import questionSample from '../assets/questionSample.jpeg';


function HowItWorksImage() {

    return (

        <Container>

            <div style={{ display: "flex", justifyContent: "center" }}>

                <img src={questionSample}  style={{ width: "100%", justifyContent: "center", marginBottom: "1rem", borderRadius: "8px" }} />

            </div>
        </Container>

    );
};

export default HowItWorksImage;