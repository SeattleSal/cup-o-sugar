/* eslint-disable react/prefer-stateless-function */
// import React, { Component } from "react";
// import logo from "./logo.svg";
import React from "react";
import "./App.css";

import FeedTabs from "./components/FeedTabs";

import Greeting from './components/Greeting';
import HeaderNav from "./components/HeaderNav";
import PostCard from "./components/PostCard";
import LoginRegDrop from "./components/LoginRegDrop";

function App() {

  return (
   
    <body>
      <div className="loginPage">
        <div className="container-fluid">
          <div className="row">

            
            <HeaderNav />

            <Greeting />
            
            <FeedTabs />

            <div className="container">
              <div className="loginCardCluster">
                
                <LoginRegDrop />

                <PostCard />

              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="https://kit.fontawesome.com/a54c5e8016.js" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
        crossorigin="anonymous"></script>
    </body>

  );
};


export default App;
