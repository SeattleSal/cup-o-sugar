import React, { useEffect, useState } from 'react';

import logo from '../logo.svg';
import GetBtn from "../components/GetBtn";


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import API from '../utils/api';
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';


function PostCard() {
const cloudName="dl7nnmiar"
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

    const handleButtonClick = (e) => {
        console.log("Button was clicked");
        
    }
    
    return (

        postData.map((postData) => (

            <Card className="card landingCard" style={{ fontFamily: "'Montserrat', sans-serif", margin: "1rem" }} >
                <Card.Body style={{ display:"flex", justifyContent:"center"}} >
                <Image cloudName={cloudName} publicId={postData.cloudinary_id} width="300" crop="scale" />
                </Card.Body>

                {/* <Card.Img variant="top" src={postData.picture} /> */}
                <Card.Body>
                    <Card.Title>{postData.name}</Card.Title>
                    <Card.Text>{postData.description}</Card.Text>
                    <Container className="postCardFooter">
                        <GetBtn onClick={handleButtonClick}/>
                    </Container>
                </Card.Body>
            </Card>
        ))
    );
};

export default PostCard;