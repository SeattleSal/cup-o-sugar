import React, {useContext, useEffect} from "react";
import HeaderNav from "../components/HeaderNav";
import FeedTabs from "../components/FeedTabs";
// import { Container } from "react-bootstrap";
import Footer from "../components/Footer";



function GiveFeed() {
    // get user context from global state


    // upon loadpage, get user info
    useEffect(() => {
        console.log("Page loaded for user:")
    }, [])

    return (
        < div className="giveFeed" >
            <HeaderNav />
            <FeedTabs />
            <Footer />
        </ div>
    );
};

export default GiveFeed;