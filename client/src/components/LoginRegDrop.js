import React from 'react';

import { Dropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
// import {DropdownButton} from 'react-bootstrap/DropdownButton';
import { Accordion } from 'react-bootstrap';
import {Card} from 'react-bootstrap';




function LoginRegDrop() {

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
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Login
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    
                    <Form className="regDropMenu" >
                        <Form.Group controlId="formBasicEmail">
                            
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                            </Button>
                    </Form>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Register
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    
                    <Form className="regDropMenu" >
                        <Form.Group>
                            <Form.Control type="text" placeholder="What's your name?" />

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">

                            <Form.Control type="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">

                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Select Your Neighorhood</Form.Label>
                        <Form.Control as="select" >
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
        </Accordion>
    )
}

export default LoginRegDrop;