import React from 'react';

import logo from '../logo.svg';


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import getAllPost from '../utils/api';



function PostCard() {

    
    const givePosts = [
        {
            name: "",
            type: "Give",
            status: "",
            description: "",
            picture: "",
            owner: "",
            responses: "",
        },
    ];
    
    return (

        givePosts.map((givePosts) => (

            <Card className="card landingCard">
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>{givePosts.name}</Card.Title>
                    <Card.Text>{givePosts.description}</Card.Text>
                    <Container className="postCardFooter">
                        <Card.Img className="postOwnerPhoto" src={logo} />
                        <Card.Text>
                            # of People interested.
                        </Card.Text>
                        <Button variant="primary">Get</Button>
                    </Container>
                </Card.Body>
            </Card>
            ))
    )
}

export default PostCard;