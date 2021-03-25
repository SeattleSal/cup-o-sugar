import React from 'react';

// Import the useAuthTokenStore hook.
import { useAuthTokenStore, useIsAuthenticated } from "../utils/auth";
import { BrowserRouter } from "react-router-dom";
import GreetingPhoto from './GreetingPhoto';
import GreetingText from './GreetingText';

function Greeting() {

    // Authorization if statement from app.js
    // ---- USER AUTHENTICATION ---- //
    // Use wherever we need to check if user is logged in or not.
    // Use the hook to reauthenticate stored tokens.
    useAuthTokenStore();
    // isAuthenticated is true / false of if user is logged in
    // for components below can show if !isAuthenticated or if isAuthenticated
    const isAuthenticated = useIsAuthenticated();
    // ---- END OF USER AUTHENTICATION VARIABLES ---- //

    return (

        <BrowserRouter>
                
            <GreetingText style={{justifyContent:"center"}} />
            <GreetingPhoto />
            
            {isAuthenticated ? (
                <p style={{ color: "rgba(95, 158, 160, 0.95)", display:"flex", justifyContent:"center", fontFamily:"'Montserrat', sans-serif"}} >You are logged in!</p>
                ) : (
                <p style={{ color: "rgba(95, 158, 160, 0.95)", display:"flex", justifyContent:"center", fontFamily:"'Montserrat', sans-serif"}} >Welcome, Guest! Please login.</p>
                )}

        </BrowserRouter>
                
    );
}

export default Greeting;
