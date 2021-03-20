import React from "react";
import HeaderNav from "../components/HeaderNav";
import HowItWorks from "../components/HowItWorks";
import {Container} from "react-bootstrap";

function HowItWorksPage() {
    return (
    <Container className="howItWorksPage">
        <HeaderNav />
        <HowItWorks />
    </Container>
    );
};

export default HowItWorksPage;