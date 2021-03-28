//IMport the tabs from react-bootstrap
import React, { useState, useEffect } from "react";
// import Greeting from './Greeting';
import { Container, Tab, Row, Tabs } from "react-bootstrap";
import PostCard from "../components/PostCard";
import MyPostCard from "./MyPostCard";
import API from "../utils/api";

// // import TabContainer from 'react-bootstrap/TabContainer'
// //import PostCard into tabs/ feed and Post

function FeedTabs() {
  const [key, setKey] = useState("home");

  return (
    <Container style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
        id="controlled-tab-example"
        className="nav nav-tabs nav-fill col-12"
      >
        <Tab
          eventKey="home"
          href="#"
          className="nav-link"
          title="Give"
          style={{
            flexWrap: "wrap",
            justifyContent: "center",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          <Row style={{ justifyContent: "center" }}>
            <PostCard />
          </Row>
        </Tab>
        <Tab
          eventKey="profile"
          href="#"
          className="nav-link"
          title="My Posts"
          style={{ flexWrap: "wrap", justifyContent: "center" }}
        >
          <Row style={{ justifyContent: "center" }}>
            <MyPostCard />
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default FeedTabs;
