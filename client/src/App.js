
/* eslint-disable react/prefer-stateless-function */
// import React, { Component } from "react";
// import logo from "./logo.svg";
import React from "react";
import "./App.css";

import LandingLogin from "./pages/LandingLogin";
import GiveFeed from "./pages/GiveFeed";
import AddPost from "./pages/AddPost";
import HowItWorksPage from "./pages/HowItWorksPage";
import Guidelines from "./pages/GuidelinesPage";
import ProfilePage from "./pages/ProfilePage";
import GuidelinesPage from "./pages/GuidelinesPage";

// Import the useAuthTokenStore hook.
// import { useAuthTokenStore, useIsAuthenticated } from "./utils/auth";
import { BrowserRouter } from "react-router-dom";

function App() {
  // ---- USER AUTHENTICATION ---- //
  // Use wherever we need to check if user is logged in or not.
  // Use the hook to reauthenticate stored tokens.
  // useAuthTokenStore();
  // isAuthenticated is true / false of if user is logged in
  // for components below can show if !isAuthenticated or if isAuthenticated
  // const isAuthenticated = useIsAuthenticated();
  // ---- END OF USER AUTHENTICATION VARIABLES ---- //

  return (
    <BrowserRouter>
            {/* {isAuthenticated ? (
              <h1>You are logged in!</h1>
            ) : (
              <h1>You are not logged in!</h1>
            )} */}
            
            <LandingLogin />
            {/* <GiveFeed /> */}
            <AddPost />
            {/* <HowItWorksPage /> */}
            {/* <GuidelinesPage /> */}
            {/* <ProfilePage /> */}
    </BrowserRouter>
  );
}

export default App;
