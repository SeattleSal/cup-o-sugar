import React from "react";
import HeaderNav from "../components/HeaderNav";
import FeedTabs from "../components/FeedTabs";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";


function GiveFeed() {
    return (
        < Container className="giveFeed" >
            < HeaderNav />
            <FeedTabs />
            <Footer />
        </Container >
    );
};

export default GiveFeed;