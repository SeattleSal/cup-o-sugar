import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import {ListGroup} from "react-bootstrap";

function Guidelines() {
    return (
        <Container>
            <Card>
                <Card.Header>
                    Guidelines
                </Card.Header>
                <ListGroup>
                    <ListGroup.Item>This app is strictly for trading items and NOT for selling items. Please refrain for asking for compensation when giving your item to someone.</ListGroup.Item>
                    <ListGroup.Item>Kindness is king, especially when dealing with your neighbors. Please treat other members with respect and kindness during communications and exchanges.</ListGroup.Item>
                    <ListGroup.Item>Be safe! Meet in public places for exchanges, do not give out any of your personal information, and do not invite strangers into your home.</ListGroup.Item>
                    <ListGroup.Item>Refrain from using profanities, degrading comments, and innappropriate language in your posts and communications.</ListGroup.Item>
                    <br/>
                    <ListGroup.Item>Not following these rules could result in being banned from this community.</ListGroup.Item>
                </ListGroup>
            </Card>
        </Container>
    )
}

export default Guidelines;