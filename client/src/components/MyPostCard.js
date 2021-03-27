import React, { useEffect, useState } from 'react';
// import { useStoreContext } from '../utils/GlobalState';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import API from '../utils/api';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';


function MyPostCard() {

    // const [state, dispatch] = useStoreContext();
    const cloudName = "dl7nnmiar"
    const [myPost, setMyPost] = useState([]);

    // const getAllPost = () => {
    //     dispatch({ type: LOADING });
    //     dispatch({ type: UPDATE_MYPOST });
    // };

    useEffect(() => {
        API.getAllPost()
            .then(results => {
                console.log(results.data)
                setMyPost(results.data)
            })
            .catch(err => console.log(err));

    }, [])

    const deleteMyPost = (event) => {
        console.log(event.target.value);
        let deleteID = event.target.value
        const tempPost = myPost.filter((post) => post._id != deleteID);
    };

        // console.log(postID)
        API.deletePost(deleteID)
            .then(results => {
                console.log(results.data);
                setMyPost(tempPost);
            })
            .catch((err) => console.log(err));

        return (


            myPost.map((myPost) => (

                <Card className="card landingCard" postID={myPost._id} style={{ fontFamily: "'Montserrat', sans-serif", margin: "1rem" }} >
                    {/* <Container> */}
                    <Card.Body style={{ display: "flex", justifyContent: "center" }} >
                        <Image variant="top" cloudName={cloudName} publicId={myPost.cloudinary_id} crop="scale" style={{ maxHeight: "13rem" }} />
                    </Card.Body>
                    {/* </Container> */}

                    <Card.Body>
                        <Card.Title>{myPost.name}</Card.Title>
                        <Card.Text>{myPost.description}</Card.Text>
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