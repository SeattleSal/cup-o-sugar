import React from "react";
import HeaderNav from "../components/HeaderNav";
import Profile from "../components/Profile";
// import {Container} from "react-bootstrap";

function ProfilePage() {
    return (
    <div className="profilePage">
        <HeaderNav />
        <Profile />
    </div>
    );
};

export default ProfilePage;