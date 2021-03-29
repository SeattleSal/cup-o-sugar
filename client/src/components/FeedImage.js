import React from 'react';
import { Container } from 'react-bootstrap';

import peopleBubbles from '../assets/peopleBubbles.jpeg';


function FeedImage() {

    return (

        <Container>

            <div style={{ display: "flex", justifyContent: "center" }}>

                <img src={peopleBubbles} alt="Box Wooden Stamps" style={{ width: "100%", justifyContent: "center", marginBottom: "1rem", borderRadius: "8px" }} />

            </div>
        </Container>

    );
};

export default FeedImage;