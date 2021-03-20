import React from "react";
import HeaderNav from "../components/HeaderNav";
import Guidelines from "../components/Guidelines";
import {Container} from "react-bootstrap";

function GuidelinesPage() {
    return (
    <Container className="howItWorksPage">
        <HeaderNav />
        <Guidelines />
    </Container>
    );
};

export default GuidelinesPage;