import React, { useEffect, useState } from 'react';

import logo from '../logo.svg';


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import API from '../utils/api';



function PostCard() {

    //state for all post and set all posts
    const [postData, setPostData] = useState([]);

    // create a function to call get all post
    // const getAllGives = () => {
    //     return API.getAllPost().then(({data}) => {
    //         console.log(data);
    //     });
    // };
    
    

    useEffect(() => {
        API.getAllPost()
              .then(results => {
                console.log(results.data)
                setPostData (results.data)
              })
              .catch(err => console.log(err));
          
    }, [])

    
    
    return (

        postData.map((postData) => (

            <Card className="card landingCard">
                <Card.Img variant="top" src={postData.picture} />
                <Card.Body>
                    <Card.Title>{postData.name}</Card.Title>
                    <Card.Text>{postData.description}</Card.Text>
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