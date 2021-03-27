import React, { useEffect, useState } from 'react';
import { useIsAuthenticated, useAuthenticatedUser } from "../utils/auth";

import logo from '../logo.svg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import API from '../utils/api';
import DeletePostBtn from './DeletePostBtn';


function MyPostCard() {

    // get user data
    const user = useAuthenticatedUser();
    // console.log("Authenticated User:")
    // console.log(user)

    const postData = [


        {
            name: "Plant",
            type: "give",
            status: "open",
            description: "Cactus",
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
            description: "Homemade from alpaca yarn",
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
        <div> {user && <h1>{user.name}</h1>}
        {postData.map((postData) => (

            <Card className="card landingCard" style={{ fontFamily: "'Montserrat', sans-serif", margin: "1rem" }} >
                <Card.Img variant="top" src={postData.picture} />
                <Card.Body>
                    <Card.Title>{postData.name}</Card.Title>
                    <Card.Text>{postData.description}</Card.Text>
                    <Container className="postCardFooter">
                        <Card.Img className="postOwnerPhoto" src={logo} />
                        {/* <Card.Text>
                            # of People interested.
                        </Card.Text> */}
                        <DropdownButton id="dropdown-basic-button" variant="info" title="Interested People">
                            <Container>
                                <Dropdown.Item href="#/action-1">{postData.responses.owner}</Dropdown.Item>
                                <Button variant="outline-info">Pick</Button>{' '}
                            </Container>

                        </DropdownButton>
                        {/* <DeletePostBtn onClick={() => removeMyPost(post.id)} /> */}
                        <DeletePostBtn />
                    </Container>
                </Card.Body>
            </Card>
        ))}
        </div>
    );
};

export default MyPostCard;