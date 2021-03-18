//IMport the tabs from react-bootstrap
import React from 'react';
// import Greeting from './Greeting';
import { Tab } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';
// // import TabContainer from 'react-bootstrap/TabContainer'
// //import PostCard into tabs/ feed and Post

function FeedTabs() {

    return (

        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="nav nav-tabs nav-fill col-12">
            <Tab eventKey="home" href="#" className="nav-link" title="Give">
                
            </Tab>
            <Tab eventKey="profile" href="#" className="nav-link" title="My Posts">
                
             </Tab>
            
         </Tabs>
    )
}

export default FeedTabs;
