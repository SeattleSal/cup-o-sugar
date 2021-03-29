import React from 'react';
import { Container } from 'react-bootstrap';

import rulesBlocks from '../assets/rulesBlocks.jpeg';


function GuidelinesImage() {

    return (

        <Container>

            <div style={{ display: "flex", justifyContent: "center" }}>

                <img src={rulesBlocks} alt="Wooden Blocks Rules" style={{ width: "100%", justifyContent: "center", marginBottom: "1rem", borderRadius: "8px" }} />

            </div>
        </Container>

    );
};

export default GuidelinesImage;