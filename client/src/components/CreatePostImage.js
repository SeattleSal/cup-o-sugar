import React from 'react';
import { Container } from 'react-bootstrap';

import giveBoxSample from '../assets/giveBoxSample.jpeg';
// import giveStampSample from '../assets/giveStampSample.jpeg';


function CreatePostImage() {

    return (

        <Container>

            <div style={{ display: "flex", justifyContent: "center" }}>

                <img src={giveBoxSample} alt="Box Wooden Stamps" style={{ width: "100%", justifyContent: "center", marginBottom: "1rem", borderRadius: "8px" }} />

            </div>
        </Container>

    );
};

export default CreatePostImage;