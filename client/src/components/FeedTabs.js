//IMport the tabs from react-bootstrap
import React, { useState, useEffect } from "react";
import { Container, Tab, Row, Tabs } from "react-bootstrap";
import PostCard from "../components/PostCard";
import MyPostCard from "./MyPostCard";
import API from "../utils/api";


function FeedTabs() {
  const [key, setKey] = useState("home");
  const [myPosts, setMyPosts] = useState([]);
  const [postData, setPostData] = useState([]);
  let userId = "";

  // set postData and myPosts for PostCard and MyPostCards
  useEffect(() => {
    // get user ID
    API.getUserInfo()
      .then((userInfo) => {
        userId = userInfo.data[0]._id;

        // get all posts and filter on user ID
        API.getAllPost()
          .then((results) => {
            // set My posts
            let posts = results.data.filter((post) => post.owner === userId);
            setMyPosts(posts);
            // set all other posts
            let notMyPosts = results.data.filter((post) => post.owner !== userId && post.status==="open");
            setPostData(notMyPosts);
          })
          .catch((err) => console.log("Get posts error: " + err));
      })
      .catch((err) => console.log("Get user info error: " + err));
  }, []);

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
            <PostCard postData={postData} setPostData={setPostData} userId={userId} />
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
            <MyPostCard myPosts={myPosts} setMyPosts={setMyPosts} />
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default FeedTabs;
