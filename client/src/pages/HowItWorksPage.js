import React from "react";
import Footer from "../components/Footer";
// import GreetingText from "../components/GreetingText";
import HeaderNav from "../components/HeaderNav";
import HowItWorks from "../components/HowItWorks";
// import {Container} from "react-bootstrap";

function HowItWorksPage() {
    return (
    <div className="howItWorksPage">
        <HeaderNav />
        <HowItWorks />
        <Footer />
    </div>
    );
};

export default HowItWorksPage;