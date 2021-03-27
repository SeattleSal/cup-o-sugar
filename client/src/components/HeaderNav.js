import React from 'react';
import { useLogout, useIsAuthenticated } from '../utils/auth';

import { Container, Jumbotron } from 'react-bootstrap';
// import { Container } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function HeaderNav() {

  // user logged in or not
  const isAuthenticated = useIsAuthenticated();

  // ---- LOGOUT  ---- //
  const logout = useLogout();
  // END OF LOGOUT FUNCTION //

  return (

    <Container>

    <Jumbotron className="jumbotron jumbotron-fluid text-center col-12" style={{ backgroundColor:"rgba(95, 158, 160, 0.65)", borderBottomLeftRadius:"8px", borderBottomRightRadius:"8px" }} >
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
          <Card style={{fontFamily:"'Montserrat', sans-serif"}}>
            <a href= "/" style={{color:"rgba(95, 158, 160, 0.65)"}}>Home</a>
            <a href= "/profile" style={{color:"rgba(95, 158, 160, 0.65)"}}>Profile</a>
            <a href= "/howitworks" style={{color:"rgba(95, 158, 160, 0.65)"}}>How It Works</a>
            <a href= "/guidelines" style={{color:"rgba(95, 158, 160, 0.65)"}}>Guidelines</a>
            {/* {isAuthenticated && <Button variant="link" onClick={logout} style={{color:"rgba(95, 158, 160, 0.65)"}}>Log Out</Button>} */}
            <Button variant="link" onClick={logout} style={{color:"rgba(95, 158, 160, 0.65)"}}>Log Out</Button>
          </Card>
        </Accordion.Collapse>
      </Accordion>
    </Jumbotron>
    </Container>
  )
}

export default HeaderNav;