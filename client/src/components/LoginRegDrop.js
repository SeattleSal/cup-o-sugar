import React, { useRef } from "react";
import { useLogin } from "../utils/auth";
import API from "../utils/api";

import { Dropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import {DropdownButton} from 'react-bootstrap/DropdownButton';
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";
import HowItWorks from "./HowItWorks";
import Guidelines from "./Guidelines";

function LoginRegDrop() {
  // ----- LOGIN - hooks and functions -----//
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  // Get the helper login function from the `useLogin` hook.
  const login = useLogin();

  const loginHandleSubmit = async (e) => {
    e.preventDefault();
    const email = loginEmailRef.current.value;
    const password = loginPasswordRef.current.value;
    try {
      const loginData = await login({ email, password });
      // userData contains user _Id
      console.log(loginData.id);
      // User has been successfully logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.
      console.log("try getting user data...");
      // API.getUserById(loginData.id);
      // console.log(userData);


    } catch (err) {
      // Handle error responses from the API
      if (err.response && err.response.data) { 
        console.log(err.response.data);
      } else {
        console.log(err.response.data);
      }
    }
  };
  // ----- END OF LOGIN -----//

  // ---- REGISTER USER - hooks and functions ----//
  const registerEmailRef = useRef();
  const registerPasswordRef = useRef();
  const registerNameRef = useRef();
  const registerNeighborhoodRef = useRef();

  //  Get the helper login function from the `useLogin` hook.
  //   we already have this above so if we separate login and register, we will need to uncomment const login=useLogin()
  //   const login = useLogin();

  const registerHandleSubmit = async (e) => {
    e.preventDefault();

    const email = registerEmailRef.current.value;
    const password = registerPasswordRef.current.value;
    const name = registerNameRef.current.value;
    const neighborhood = registerNeighborhoodRef.current.value;

    try {
      // Register the user.
      await API.register({ name, email, password, neighborhood });

      // User has been successfully registered, now log them in with the same information.
      await login({ email, password });

      // User has been successfully registered, logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.
    } catch (err) {
      // Handle error responses from the API. This will include
      if (err.response && err.response.data) { 
        console.log(err.response.data);
      } else {
        console.log(err.response.data);
      }
    }
  };
  // ---- END OF REGISTER USER ----//

  return (
    // <div className="login-options">
    //           <p>
    //             <button className="btn btn-primary loginBtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
    //               aria-expanded="false" aria-controls="collapseExample">
    //               Login
    //                 </button>
    //             <button className="btn btn-primary loginBtn" type="button" data-bs-toggle="collapse"
    //               data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
    //               Register
    //                 </button>
    //           </p>
    //           <div className="collapse" id="collapseExample">
    //             <div className="card card-body">
    //               <input className="form-control form-control-sm" type="text" placeholder="Enter email"
    //                 aria-label=".form-control-sm example"></input>
    //               <input className="form-control form-control-sm" type="password" placeholder="Enter password"
    //                 aria-label=".form-control-sm example"></input>
    //               <button type="submit" className="btn btn-primary" id="loginBtn">Login</button>
    //             </div>
    //           </div>
    //           <div className="collapse" id="collapseExample2">
    //             <div className="card card-body">
    //               <input className="form-control form-control-sm" type="text" placeholder="Enter Name"
    //                 aria-label=".form-control-sm example"></input>
    //               <select className="form-select" id="specificSizeSelect">
    //                 <option selected>Choose...</option>
    //                 <option value="1">ZipCode 1</option>
    //                 <option value="2">ZipCode 2</option>
    //                 <option value="3">ZipCode 3</option>
    //               </select>
    //               <input className="form-control form-control-sm" type="text" placeholder="Enter email"
    //                 aria-label=".form-control-sm example"></input>
    //               <input className="form-control form-control-sm" type="password" placeholder="Enter password"
    //                 aria-label=".form-control-sm example"></input>
    //               <button type="submit" className="btn btn-primary" id="registerBtn">Register</button>
    //             </div>
    //           </div>

    //         </div>

    // <Container className="loginRegForms">

    //     <Dropdown>

    //         <Dropdown.Toggle variant="primary" className="loginDrop btn btn-primary" data-bs-toggle="collapse" role="button" href="#loginDropDownDown"
    //             aria-expanded="false" aria-controls="collapseExample">
    //             Login
    //         </Dropdown.Toggle>

    //         <Dropdown.Menu className="collapse" id="loginDropDownDown">

    // <Form className="regDropMenu" >
    //     <Form.Group controlId="formBasicEmail">
    //         <Form.Label>Email address</Form.Label>
    //         <Form.Control type="email" placeholder="Enter email" />
    //     </Form.Group>

    //     <Form.Group controlId="formBasicPassword">
    //         <Form.Label>Password</Form.Label>
    //         <Form.Control type="password" placeholder="Password" />
    //     </Form.Group>

    //     <Button variant="primary" type="submit">
    //         Submit
    //         </Button>
    // </Form>

    //         </Dropdown.Menu>

    //     </Dropdown>
    //     <Dropdown>

    //         <Dropdown.Toggle variant="primary" className="regDrop" id="dropdown-basic">
    //             Register
    //         </Dropdown.Toggle>

    //         <Dropdown.Menu className="collapse" id="loginDropDownDown">
    // <Form className="regDropMenu" >
    //     <Form.Group>
    //         <Form.Control type="text" placeholder="What's your name?" />

    //     </Form.Group>
    //     <Form.Group controlId="formBasicEmail">

    //         <Form.Control type="email" placeholder="Enter email" />

    //     </Form.Group>

    //     <Form.Group controlId="formBasicPassword">

    //         <Form.Control type="password" placeholder="Password" />
    //     </Form.Group>
    //     <Form.Group>
    //         <Form.Label>Select Your Neighorhood</Form.Label>
    //     <Form.Control as="select" >
    //         <option>Zipcode 1</option>
    //         <option>Zipcode 2</option>
    //         <option>Zipcode 3</option>
    //         <option>Zipcode 4</option>
    //         <option>Zipcode 5</option>
    //     </Form.Control>
    //     </Form.Group>

    //     <Button variant="primary" type="submit">
    //         Submit
    // </Button>
    // </Form>
    //         </Dropdown.Menu>

    //     </Dropdown>
    // </Container>

    <Accordion>
      <Card className="loginDrop">
        <Card.Header className="loginAccBtn" style={{ backgroundColor: "rgba(95, 158, 160, 0.45)"}} >
          <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ color: "white", fontFamily:"'Montserrat', sans-serif"}}>
            Login
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Form className="regDropMenu" onSubmit={loginHandleSubmit} style={{ fontFamily:"'Montserrat', sans-serif"}}>
            <Form.Group controlId="loginEmail">
              <Form.Control
                type="text"
                ref={loginEmailRef}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="loginPassword">
              <Form.Control
                type="password"
                ref={loginPasswordRef}
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header className="regAccBtn"  style={{ backgroundColor: "rgba(95, 158, 160, 0.45)"}} >
          <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{ color: "white", fontFamily:"'Montserrat', sans-serif"}}>
            Register
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Form className="regDropMenu" onSubmit={registerHandleSubmit} style={{ fontFamily:"'Montserrat', sans-serif"}}>
            <Form.Group controlId="registerName">
              <Form.Control type="text" ref={registerNameRef} placeholder="What's your name?" />
            </Form.Group>
            <Form.Group controlId="registerEmail">
              <Form.Control type="email" ref={registerEmailRef} placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="registerPassword">
              <Form.Control type="password" ref={registerPasswordRef} placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="registerNeighborhood">
              <Form.Label>Select Your Neighorhood</Form.Label>
              <Form.Control as="select" ref={registerNeighborhoodRef} style={{ fontFamily:"'Montserrat', sans-serif"}}>
                <option>Zipcode 1</option>
                <option>Zipcode 2</option>
                <option>Zipcode 3</option>
                <option>Zipcode 4</option>
                <option>Zipcode 5</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Accordion.Collapse>
      </Card>
      <Card className="loginDrop">
        <Card.Header className="loginAccBtn" style={{ backgroundColor: "rgba(95, 158, 160, 0.45)"}} >
          <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{ color: "white", fontFamily:"'Montserrat', sans-serif"}}>
            How it Works
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2" style={{ margin: "1.5rem"}}>
          <HowItWorks />
        </Accordion.Collapse>
      </Card>
      <Card className="loginDrop">
        <Card.Header className="loginAccBtn" style={{ backgroundColor: "rgba(95, 158, 160, 0.45)"}} >
          <Accordion.Toggle as={Button} variant="link" eventKey="3" style={{ color: "white", fontFamily:"'Montserrat', sans-serif"}}>
            Guidelines
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3" style={{ margin: "1.5rem"}}>          
          <Guidelines />
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default LoginRegDrop;
