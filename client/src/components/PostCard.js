import React, { useState, useEffect } from 'react';

import GetBtn from "../components/GetBtn";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import API from '../utils/api';
import { Image } from 'cloudinary-react';
import { Button } from 'react-bootstrap';


function PostCard({ postData, setPostData, userId }) {

    // postData and setPostData come in as props
    const [postOwnerInfo, setPostOwnerInfo] = useState("");
    // const [alreadyClaimed, setAlreadyClaimed] = useState(false);
    const cloudName="dl7nnmiar";

    // useEffect(() => {
    //     if (postData.status === "claimed") {
    //         setAlreadyClaimed(true);
    //     }
    // }, [])

    // update post as claimed
    const handleButtonClick = (e) => {
        // console.log(e.target.value);
        let tempPost = postData.map((post) => {
            if(post._id === e.target.value) {
                post.status = "claimed";
                console.log(userId)
            }
            return post;
        })
        // console.log(tempPost)

        //call API updatePost and send postID and status. back end will use auth ID
        API.updatePost(e.target.value, { status: "claimed"})
        .then((data) => {
            // data has the email of owner 
            console.log(data.data)
            setPostData(tempPost);
            setPostOwnerInfo(data.data.owner.email);

        })
        .catch(err => console.log(err));

    }
    
    return (

        postData.map((postData) => (

            <Card className="card landingCard" key={postData._id} style={{ fontFamily: "'Montserrat', sans-serif", margin: "1rem"}} >
                <Card.Body style={{ display:"flex", justifyContent:"center"}} >
                <Image cloudName={cloudName} publicId={postData.cloudinary_id} width="300" crop="scale" />
                </Card.Body>

                {/* <Card.Img variant="top" src={postData.picture} /> */}
                <Card.Body>
                    <Card.Title>{postData.name}</Card.Title>
                    <Card.Text>{postData.description}</Card.Text>
                    <Container className="postCardFooter" >
                        <GetBtn value={postData._id} status={postData.status} onClick={handleButtonClick}/>
                        {postData.status === "claimed" &&
                        <Button variant="outline-primary" type="submit" style={{marginLeft:"5px"}}>You got it! Contact owner at {postOwnerInfo}</Button>
                        }   
                    </Container>
                </Card.Body>
            </Card>
        ))
    );
};

export default PostCard;