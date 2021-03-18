import React from 'react';

import { Jumbotron } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function HeaderNav() {

  return (

    <Jumbotron className="jumbotron jumbotron-fluid text-center col-12">
      <Container className="navContainer container">

        <Dropdown>
          <Dropdown.Toggle className="btn btn-primary fas fa-bars" data-bs-toggle="collapse" role="button"
            aria-expanded="false" aria-controls="collapse">
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item className="dropdown-item" >Profile</Dropdown.Item>
            <Dropdown.Item className="dropdown-item" >How it Works</Dropdown.Item>
            <Dropdown.Item className="dropdown-item" >Guidelines</Dropdown.Item>
            <Dropdown.Divider className="dropdown-divider"></Dropdown.Divider>
            <Dropdown.Item className="dropdown-item" >Log Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <h1 >Cup of Sugar</h1>

        <Button className="nav-link btn btn-primary fas fa-plus" href="#"></Button>

      </Container>

    </Jumbotron>
  )
}

export default HeaderNav;