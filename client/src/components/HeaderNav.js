import React from 'react';
import { useLogout } from '../utils/auth';


import { Jumbotron } from 'react-bootstrap';
// import { Container } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function HeaderNav() {

  // ---- LOGOUT  ---- //
  // I added as a button but feel free to change it to different component as long as it has an event that calls logout
  const logout = useLogout();
  // END OF LOGOUT FUNCTION //

  return (
    <Jumbotron className="jumbotron jumbotron-fluid text-center col-12" style={{ backgroundColor:"rgba(95, 158, 160, 0.65)"}} >
      <Accordion>
        <div className="navContainer container">

          {/* <Card> */}
            <Accordion.Toggle as={Button} className="fas fa-bars" variant="link" eventKey="0" style={{ color: "white", fontSize: "1.75rem"}}>
            </Accordion.Toggle>
          {/* </Card> */}

          <h1 style={{ fontFamily: "'Lobster', cursive", color: "white"}}>Cup of Sugar</h1>

          <a className="nav-link fas fa-plus" href="/post" style={{ color: "white", fontSize: "1.75rem"}} />

        </div>
        <Accordion.Collapse eventKey="0">
          <Card>
            <a href= "/">Home</a>
            <a href= "/profile">Profile</a>
            <a href= "/howitworks">How It Works</a>
            <a href= "/guidelines">Guidelines</a>
            <Button variant="link" onClick={logout}>Log Out</Button>
          </Card>
        </Accordion.Collapse>
      </Accordion>
    </Jumbotron>
  )
}

export default HeaderNav;