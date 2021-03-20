import React from 'react';
import Footer from '../components/Footer';
import Greeting from '../components/Greeting';
import HeaderNav from '../components/HeaderNav';
import LoginRegDrop from '../components/LoginRegDrop';
import PostCard from '../components/PostCard';

import { Container } from 'react-bootstrap';




function LandingLogin() {

    return (

        <div className="landLogin">
            <HeaderNav />
            <Greeting />
            <LoginRegDrop />
            <PostCard />
            <Footer />
        </div>

    );
};

export default LandingLogin;