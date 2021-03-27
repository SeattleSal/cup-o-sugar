import React, {useContext, useEffect} from "react";
import HeaderNav from "../components/HeaderNav";
import FeedTabs from "../components/FeedTabs";
// import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import { UserContext } from "../store/UserContext";



function GiveFeed() {
    // get user context from global state
    const [user, setUser] = useContext(UserContext);



    // upon loadpage, get user info
    useEffect(() => {
        console.log("Page loaded for user:")
        console.log(user)
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