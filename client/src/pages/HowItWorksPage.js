import React from "react";
import Footer from "../components/Footer";
import HeaderNav from "../components/HeaderNav";
import HowItWorks from "../components/HowItWorks";
import HowItWorksImage from "../components/HowItWorksImage";
function HowItWorksPage() {
    return (
    <div className="howItWorksPage">
        <HeaderNav />
        <HowItWorksImage />
        <HowItWorks />
        <Footer />
    </div>
    );
};

export default HowItWorksPage;