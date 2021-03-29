import React from "react";
import HeaderNav from "../components/HeaderNav";
import Guidelines from "../components/Guidelines";
import Footer from "../components/Footer";
import GuidelinesImage from "../components/GuidelinesImage";

function GuidelinesPage() {
    return (
    <div className="guidelinesPage">
        <HeaderNav />
        <GuidelinesImage />
        <Guidelines />
        <br></br>
        <Footer />
    </div>
    );
};

export default GuidelinesPage;