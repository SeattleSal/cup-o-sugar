import React from "react";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";

function HowItWorks() {
    return (
        <Container>
            <Card style={{ fontFamily: "'Montserrat', sans-serif" }} >
                <Card.Header style={{ fontFamily: "'Lobster', cursive", fontSize: "1.5rem", textAlign: "center", color:"white", backgroundColor:"rgba(95, 158, 160, 0.65)" }} >How It Works</Card.Header>
                <Container style={{color:"white", backgroundColor:"rgba(95, 158, 160, 0.45)"}}>

                    <p style={{marginTop:"1rem"}}>
                        <span style={{fontFamily:"'Lobster', cursive", fontSize:"1.25rem"}} >Cup of Sugar</span> is a hyper-local neighborhood experience focused on giving.
                    </p>

                    <p>
                        Once you create your account on the home page, you will have the ability to view posts from your nearby neighbors who want to rehome their belongings.
                    </p>

                    <p>
                        If you see something you like, click the "Get" button at the bottom of the post and it's all yours. The current owner will contact you to facilitate the handover.
                    </p>

                    <p>
                        If you have an item that you would like to rehome, click the "+" button in the top right hand corner. Add a photo of your item along with a description and click "Post". Your item will appear in the main feed for your neighborhood.
                    </p>

                    <p>
                        After your post is live, you will be able to see your post in the "My Posts" Tab of your feed. 
                    </p>

                    <p>
                        If possible, we highly suggest arranging to meet in a public place to exchange your item.
                    </p>

                    <p>
                        To return to the login/register page, click "Home" in the drop down menu on the top left of the screen.
                    </p>

                </Container>
            </Card>
        </Container>
    )
}

export default HowItWorks;