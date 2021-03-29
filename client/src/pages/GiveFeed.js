import React from "react";
import HeaderNav from "../components/HeaderNav";
import FeedTabs from "../components/FeedTabs";
import Footer from "../components/Footer";
import FeedImage from "../components/FeedImage";
import FeedText from "../components/FeedText";



function GiveFeed() {



    return (
        < div className="giveFeed" >
            <HeaderNav />
            <FeedImage />
            <FeedText />
            <FeedTabs />
            <Footer />
        </ div>
    );
};

export default GiveFeed;