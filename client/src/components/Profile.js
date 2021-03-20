import React from "react";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";

function Profile() {
    return (
        <Container>
            <Card>
                <Card.Header>
                    Welcome NAME!
                    <h3>Please use this page to make sure your information is correct. If you need to change your email, you can input and save a new one.</h3>
                </Card.Header>
                <ListGroup>
                    <ListGroup.Item>USERS NAME</ListGroup.Item>
                    <ListGroup.Item>USERS EMAIL</ListGroup.Item>
                </ListGroup>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Current Email Address: ENTER EMAIL HERE</Form.Label>
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