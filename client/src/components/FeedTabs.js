//IMport the tabs from react-bootstrap
import React from 'react';
// import Greeting from './Greeting';
import { Container, Tab } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';
import PostCard from '../components/PostCard';

// // import TabContainer from 'react-bootstrap/TabContainer'
// //import PostCard into tabs/ feed and Post

function FeedTabs() {

    return (

        <Container>

            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="nav nav-tabs nav-fill col-12" style={{ display:"flex", justifycontent:"center" }}>

                <Tab eventKey="home" href="#" className="nav-link" title="Give" >

                    <PostCard />
                    <PostCard />
                    <PostCard />

                </Tab>
                <Tab eventKey="profile" href="#" className="nav-link" title="My Posts">

                    <PostCard />
                    <PostCard />
                    <PostCard />

                </Tab>

            </Tabs>
        </Container>
    );
};

export default FeedTabs;
