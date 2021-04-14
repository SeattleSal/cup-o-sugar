import React from 'react';
import GetBtn from "../components/GetBtn";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import API from '../utils/api';
import { Image } from 'cloudinary-react';
import { Button } from 'react-bootstrap';

function PostCard({ postData, setPostData }) {

    // postData and setPostData come in as props
    const cloudName="dl7nnmiar";

    // update post as claimed
    const handleButtonClick = (e) => {
        // console.log(e.target.value);
        const clickedId = e.target.value;

        //call API updatePost and send postID and status. back end will use auth ID
        API.updatePost(clickedId, { status: "claimed"})
        .then((data) => {
            // data returned has the email of post owner 
            // console.log(data.data)

            // check data for error message "already claimed" message
            // if "already claimed" -> message = "sorry already claimed"
            let tempPost = postData.map((post) => {
                if(post._id === clickedId) {
                    post = {...post, status : "claimed", postOwnerEmail : data.data.owner.email}
                }
                return post;
            })
            setPostData(tempPost);
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
                        <GetBtn value={postData._id} status={postData.status} onClick={handleButtonClick}/>
                        {postData.status === "claimed" &&
                        <Button variant="outline-primary" type="submit" style={{marginLeft:"5px"}}>You got it! Contact owner at {postData.postOwnerEmail}</Button>
                        }   
                    </Container>
                </Card.Body>
            </Card>
        ))
    );
};

export default PostCard;