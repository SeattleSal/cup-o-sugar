import React from 'react';
import Footer from '../components/Footer';
import Greeting from '../components/Greeting';
import HeaderNav from '../components/HeaderNav';
import LoginRegDrop from '../components/LoginRegDrop';

function LandingLogin() {

    return (

        <div className="landLogin">
            <HeaderNav />
            <Greeting />
            <LoginRegDrop />
            <Footer />
        </div>

    );
};

export default LandingLogin;