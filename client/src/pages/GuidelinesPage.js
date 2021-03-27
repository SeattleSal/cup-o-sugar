import React from "react";
import HeaderNav from "../components/HeaderNav";
import Guidelines from "../components/Guidelines";
import Footer from "../components/Footer";
// import {Container} from "react-bootstrap";

function GuidelinesPage() {
    return (
    <div className="guidelinesPage">
        <HeaderNav />
        <Guidelines />
        <Footer />
    </div>
    );
};

export default GuidelinesPage;