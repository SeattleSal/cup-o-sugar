//IMport the tabs from react-bootstrap
import React from 'react';
// import Greeting from './Greeting';
// import { Tab } from 'react-bootstrap';
// import { Tabs } from 'react-bootstrap';
// // import TabContainer from 'react-bootstrap/TabContainer'
// //import PostCard into tabs/ feed and Post

function FeedTabs() {

    return (

        <ul className="nav nav-tabs nav-fill col-12">
            <li className="nav-item">
                <a className="nav-link" href="#">Gives</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">My Posts</a>
            </li>
        </ul>

    //     <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
    //         <Tab eventKey="home" title="Give">
                
    //         </Tab>
    //         <Tab eventKey="profile" title="My Posts">
                
    //         </Tab>
            
    //     </Tabs>
    )
}

export default FeedTabs;
