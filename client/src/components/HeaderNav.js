import React from 'react';
import { useLogout } from '../utils/auth';


import { Jumbotron } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function HeaderNav() {

  // ---- LOGOUT  ---- //
  // I added as a button but feel free to change it to different component as long as it has an event that calls logout
  const logout = useLogout();
  // END OF LOGOUT FUNCTION //

  return (
    <Jumbotron className="jumbotron jumbotron-fluid text-center col-12">
      <Accordion>
        <div className="navContainer container">

<<<<<<< HEAD
          {/* <Card> */}
            <Card.Header>
              <Accordion.Toggle as={Button} className="btn btn-primary fas fa-bars" variant="link" eventKey="0">
              </Accordion.Toggle>
            </Card.Header>

          {/* </Card> */}
=======
            <Card>
              <Accordion.Toggle as={Button} className="btn btn-primary fas fa-bars" variant="link" eventKey="0">
              </Accordion.Toggle>
            </Card>
>>>>>>> f361d66ae6242a89b7066df25b7ce8d34b588a12

          <h1 >Cup of Sugar</h1>

          <Button className="nav-link btn btn-primary fas fa-plus" href="#"></Button>

        </div>
        <Accordion.Collapse eventKey="0">
          <Card>
            <Card.Body>Home</Card.Body>
            <Card.Body>Profile</Card.Body>
            <Card.Body>How It Works</Card.Body>
            <Card.Body>Guidelines</Card.Body>
            <Button variant="link" onClick={logout}>Log Out</Button>
            {/* <Card.Body><button onClick={logout}>Log Out</button></Card.Body> */}
          </Card>
        </Accordion.Collapse>
      </Accordion>
    </Jumbotron>
  )
}

export default HeaderNav;