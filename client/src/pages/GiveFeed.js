import React, {useContext, useEffect} from "react";
import HeaderNav from "../components/HeaderNav";
import FeedTabs from "../components/FeedTabs";
import UserContext from "../store/UserContext"
// import { Container } from "react-bootstrap";
import Footer from "../components/Footer";


function GiveFeed() {
    // get user context from global state
    const {state} = useContext(UserContext);

    // upon loadpage, get user info
    useEffect(() => {
        console.log("Page loaded")
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