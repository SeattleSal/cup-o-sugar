import React from 'react';

import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



function CreatePost() {

    return (

        <Form style={{marginLeft:"2rem", marginRight:"2rem"}} >

            <h3 classname="postOwnerName" style={{ fontFamily:"'Lobster', cursive"}}>Owner Name</h3>
            
            <Form.Control type="text" placeholder="Item Name" />

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} placeholder="Description"/>
            </Form.Group>
            
            <Form.Group>
            <Form.Label>Upload a Photo</Form.Label>
                <Form.File id="exampleFormControlFile1" label="Example file input" />
            </Form.Group>
          
            <Button variant="primary" type="submit">
                Post
            </Button>
        </Form>

        //Redirect to FeedPage after submit

    );
};

export default CreatePost;