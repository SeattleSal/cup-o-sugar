import React from 'react';

import logo from '../logo.svg';


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'



function PostCard() {

    return (

        // <div className="card landingCard">
        //     <img className="card-img-top" src={logo} alt="Card image cap" />
        //     <div className="card-body">
        //         <h5 className="card-title">Card title</h5>
        //         <h6>Give</h6>
        //         <p className="card-text">
        //             Some quick example text to build on the card title and make
        //             up the bulk of the card's content.
        //         </p>
        //         <div className="postCardFooter">
        //             <img className="postOwnerPhoto" src={logo} ></img>
        //             <p># of People interested.</p>
        //             <a href="#" className="btn btn-primary">Get</a>
        //         </div>
        //     </div>
        // </div>

        <Card className="card landingCard">
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content. HEllo
                </Card.Text>
                <Container className="postCardFooter">

                <Card.Img className="postOwnerPhoto" src={logo} />
                <Card.Text>
                    # of People interested.
               </Card.Text>
                <Button variant="primary">Get</Button>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default PostCard;