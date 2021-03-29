import React from 'react';
// import { useStoreContext } from '../utils/GlobalState';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import API from '../utils/api';
import { Image } from 'cloudinary-react';


function MyPostCard({ myPosts, setMyPosts}) {
    // myPosts and setMyPosts come in as props

    const cloudName = "dl7nnmiar"

    // delete post
    const deleteMyPost = (event) => {
        // console.log(event.target.value);
        let deleteID = event.target.value
        const tempPost = myPosts.filter((post) => post._id !== deleteID);

        // console.log(postID)
        API.deletePost(deleteID)
            .then(results => {
                // console.log(results.data);
                setMyPosts(tempPost);
            })
            .catch((err) => console.log(err));
    };

    return (

        myPosts.map((myPost) => (

            <Card className="card landingCard" key={myPost._id} style={{ fontFamily: "'Montserrat', sans-serif", margin: "1rem" }} >
                {/* <Container> */}
                <Card.Body style={{ display: "flex", justifyContent: "center" }} >
                    <Image variant="top" cloudName={cloudName} publicId={myPost.cloudinary_id} crop="scale" style={{ maxHeight: "13rem" }} />
                </Card.Body>
                {/* </Container> */}

                <Card.Body>
                    <Card.Title>{myPost.name}</Card.Title>
                    <Card.Text>{myPost.description}</Card.Text>
                    <Card.Text>Status: {myPost.status}</Card.Text>

                    <Container className="postCardFooter">
                        {/* <Card.Img className="postOwnerPhoto" src={logo} /> */}
                        {/* <Card.Text>{myPost.owner}</Card.Text> */}
                        {/* display claimed or unclaimed(open or closed status) */}
                        <Button className="delete-btn" tabIndex="0" value={myPost._id} variant="outline-danger" onClick={deleteMyPost} >Delete</Button>
                    </Container>
                </Card.Body>
            </Card>
        ))

    );
};

export default MyPostCard;