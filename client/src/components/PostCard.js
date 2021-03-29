import React from 'react';

// import logo from '../logo.svg';
import GetBtn from "../components/GetBtn";
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import API from '../utils/api';
import { Image } from 'cloudinary-react';
import { Button } from 'react-bootstrap';


function PostCard({ postData, setPostData }) {
const cloudName="dl7nnmiar"

    // postData and setPostData come in as props

    // update post as claimed
    const handleButtonClick = (e) => {
        // console.log(e.target.value);
        let tempPost = postData.map((post) => {
            if(post._id === e.target.value) {
                post.status = "claimed";
            }
            return post;
        })
        // console.log(tempPost)
        setPostData(tempPost)

        //call API updatePost and send postID and status. back end will use auth ID

    }
    
    return (

        postData.map((postData) => (

            <Card className="card landingCard" key={postData._id} style={{ fontFamily: "'Montserrat', sans-serif", margin: "1rem" }} >
                <Card.Body style={{ display:"flex", justifyContent:"center"}} >
                <Image cloudName={cloudName} publicId={postData.cloudinary_id} width="300" crop="scale" />
                </Card.Body>

                {/* <Card.Img variant="top" src={postData.picture} /> */}
                <Card.Body>
                    <Card.Title>{postData.name}</Card.Title>
                    <Card.Text>{postData.description}</Card.Text>
                    <Container className="postCardFooter" >
                        <GetBtn value={postData._id} status={postData.status} onClick={handleButtonClick}/>
                        <Button variant="outline-primary" type="submit">Insert owner's contact information.</Button>
                    </Container>
                </Card.Body>
            </Card>
        ))
    );
};

export default PostCard;