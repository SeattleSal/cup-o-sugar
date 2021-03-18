import React from 'react';

import { Jumbotron } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function HeaderNav() {

  return (
    <Jumbotron className="jumbotron jumbotron-fluid text-center col-12">
      <Accordion>
        <Container className="navContainer container">



          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} className="btn btn-primary fas fa-bars" variant="link" eventKey="0">
              </Accordion.Toggle>
            </Card.Header>

          </Card>


          <h1 >Cup of Sugar</h1>

          <Button className="nav-link btn btn-primary fas fa-plus" href="#"></Button>

        </Container>
        <Accordion.Collapse eventKey="0">
          <Card>
            <Card.Body>Profile</Card.Body>
            <Card.Body>How It Works</Card.Body>
            <Card.Body>Guidelines</Card.Body>
            <Card.Body>Log Out</Card.Body>
          </Card>
        </Accordion.Collapse>
      </Accordion>
    </Jumbotron>
  )
}

export default HeaderNav;