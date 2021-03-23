import React from "react";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Profile() {
    return (
        <Container>
            <Card style={{ fontFamily:"'Montserrat', sans-serif"}}>
                <Card.Header style={{ fontFamily:"'Lobster', cursive", fontSize: "1.5rem" }} >
                    Welcome NAME!
                    <p style={{ fontFamily:"'Montserrat', sans-serif", fontSize:"1rem"}} >Please use this page to make sure your information is correct. If you need to change your email, you can input and save a new one.</p>
                </Card.Header>
                <ListGroup>
                    <ListGroup.Item>Users Name</ListGroup.Item>
                    <ListGroup.Item>Users Email</ListGroup.Item>
                </ListGroup>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Current Email Address: EMAIL</Form.Label>
                        <Form.Control type="email" placeholder="Enter new email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Update Email Address
                    </Button>
                </Form>

            </Card>
        </Container>
    )
}

export default Profile;