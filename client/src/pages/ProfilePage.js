import React from "react";
import Footer from "../components/Footer";
import HeaderNav from "../components/HeaderNav";
import Profile from "../components/Profile";

function ProfilePage() {
    return (
    <div className="profilePage">
        <HeaderNav />
        <Profile />
        <Footer />
    </div>
    );
};

export default ProfilePage;