import React from 'react';
import API from '../utils/api';
import { Image } from 'cloudinary-react';
import { Card, Container, Button } from 'react-bootstrap';

function PostCard({ postData, setPostData }) {

    // postData and setPostData come in as props
    const cloudName="dl7nnmiar";

    // update post as claimed
    const handleButtonClick = (e) => {
        const clickedId = e.target.value;

        //call API updatePost and send postID and status. back end will use auth ID
        API.updatePost(clickedId, { status: "claimed"})
        .then((data) => {
            // check data for error message "already claimed" message
            // if "already claimed" -> message = "sorry already claimed"
            if (data.data === "alreadyClaimed") {
                let tempPost = postData.map((post) => {
                    if(post._id === clickedId) {
                        post = {...post, status : "alreadyClaimed"}
                    }
                    return post;
                })
                setPostData(tempPost);
            } 
            // logged in user claimed post
            else {
                let tempPost = postData.map((post) => {
                    if(post._id === clickedId) {
                        post = {...post, status : "claimed", postOwnerEmail : data.data.owner.email}
                    }
                    return post;
                })
                setPostData(tempPost);
            }
        })
        .catch(err => console.log(err));
    }
    
    return (

        postData.map((postData) => (

            <Card className="card landingCard" key={postData._id} style={{ fontFamily: "'Montserrat', sans-serif", margin: "1rem", backgroundColor:"rgba(95, 158, 160, 0.10)"}} >
                <Card.Body style={{ display:"flex", justifyContent:"center"}} >
                    <Image cloudName={cloudName} publicId={postData.cloudinary_id} width="300" crop="scale" />
                </Card.Body>

                <Card.Body>
                    <Card.Title>{postData.name}</Card.Title>
                    <Card.Text>{postData.description}</Card.Text>
                    <Container className="postCardFooter" >
                        <Button className="get-btn rounded" tabIndex="0" style={{backgroundColor:"rgba(95, 158, 160, 0.65)", color: "white" }}
                            value={postData._id} status={postData.status} onClick={handleButtonClick}>
                                {postData.status === "open" && "Get"}
                                {postData.status === "claimed" && `It's yours! Contact owner at ${postData.postOwnerEmail}`}
                                {postData.status === "alreadyClaimed" && "Too late! Already taken!"}
                        </Button>

                        {/* {postData.status === "claimed" &&
                            <Button variant="outline-primary" disabled={true} style={{marginLeft:"5px"}}>It's yours! Contact owner at {postData.postOwnerEmail}</Button>
                        }   
                        {postData.status === "alreadyClaimed" &&
                            <Button variant="outline-primary" disabled={true} style={{marginLeft:"5px"}}>Too late! Someone already got it!</Button>
                        }    */}
                    </Container>
                </Card.Body>
            </Card>
        ))
    );
};

export default PostCard;