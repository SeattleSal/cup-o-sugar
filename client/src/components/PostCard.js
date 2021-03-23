import React, { useEffect, useState } from 'react';

import logo from '../logo.svg';


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import API from '../utils/api';



function PostCard() {

    //state for all post and set all posts
    // const [allGivePosts, setAllGivePosts] = useState([]);

    // create a function to call get all post
    // const getAllGives = () => {
    //     return API.getAllPost().then(({data}) => {
    //         console.log(data);
    //     });
    // };

    // useEffect(() => {
    //     getAllGives()
    // }, [])

    // const givePosts = [
    //     {
    //         name: "",
    //         type: "Give",
    //         status: "",
    //         description: "",
    //         picture: "",
    //         owner: "",
    //         responses: "",
    //     },
    // ];

    const postData = [
        {
            name: "Tricycle",
            type: "give",
            status: "open",
            decription: "One year old, almost new",
            picture: " https://cdn.pixabay.com/photo/2015/03/26/10/34/tricycle-691587_960_720.jpg",
            owner: "Talor Swift",
            responses: [
                {
                    owner: " 604d24a2eb7588d074b6ad67 ",   //Taylor Swift ID
                    chosen: true,
                }
            ]


        },

        {
            name: "Sofa",
            type: "give",
            status: "open",
            decription: "Four years old, it has couple of stains on the side",
            picture: " https://cdn.pixabay.com/photo/2017/08/06/15/44/house-2593570_960_720.jpg",
            owner: "Chaka Khan",
            responses: [
                {
                    owner: " 604d24a2eb7588d074b6ad68",   // Chaka Kahn Id
                    chosen: true,
                }
            ]
        },

        {
            name: "Plant",
            type: "give",
            status: "open",
            decription: "Cactus",
            picture: " https://cdn.pixabay.com/photo/2019/04/27/21/56/cactus-4161380_960_720.jpg",
            owner: "Mariah Cary",
            responses: [
                {
                    owner: " 604d24a2eb7588d074b6ad69",    // Mariah Cary Id
                    chosen: true,
                }
            ]

        },

        {
            name: "Scarf",
            type: "give",
            status: "open",
            decription: "Homemade from alpaca yarn",
            picture: " https://cdn.pixabay.com/photo/2017/08/06/14/42/blanket-2593141_960_720.jpg",
            owner: "Shade",
            responses: [
                {
                    owner: "604d24a2eb7588d074b6ad65 ",    //  Shade Id
                    chosen: true,
                }

            ]
        },
    ];



    
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