import React from "react";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import {ListGroup} from "react-bootstrap";

function Guidelines() {
    return (
        <Container>
            <Card style={{ fontFamily:"'Montserrat', sans-serif"}} >
                <Card.Header style={{ fontFamily:"'Lobster', cursive", fontSize: "1.5rem", textAlign:"center", color:"white", backgroundColor:"rgba(95, 158, 160, 0.65)"}} >
                    Just some friendly reminders...
                </Card.Header>
                <ListGroup style={{color:"white"}}>
                    <ListGroup.Item style={{ backgroundColor:"rgba(95, 158, 160, 0.45)" }}>This app is strictly for trading items and NOT for selling items. Please refrain for asking for compensation when giving your item to someone.</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor:"rgba(95, 158, 160, 0.45)" }}>Kindness is king, especially when dealing with your neighbors. Please treat other members with respect and kindness during communications and exchanges.</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor:"rgba(95, 158, 160, 0.45)" }}>Be safe! Meet in public places for exchanges, do not give out any of your personal information, and do not invite strangers into your home.</ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor:"rgba(95, 158, 160, 0.45)" }}>Refrain from using profanities, degrading comments, and innappropriate language in your posts and communications.</ListGroup.Item>
                    
                    <ListGroup.Item style={{ backgroundColor:"rgba(95, 158, 160, 0.45)" }}>Not following these rules could result in being banned from this community.</ListGroup.Item>
                </ListGroup>
            </Card>
        </Container>
    )
}

export default Guidelines;