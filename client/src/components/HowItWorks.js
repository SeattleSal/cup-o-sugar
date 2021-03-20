import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";

function HowItWorks() {
    return (
        <Container>
            <Card>
                <Card.Header>
                    How It Works
            </Card.Header>
                <p>
                    Cup of Sugar is a hyper-local buy-nothing neighborhood experience.
                <br />
                Once you create your account from the home page of the app, you will have the ability to view posts from your nearby neighbors who want to rehome their unwanted items.
                <br />
                If you see something you like, click the "Get" button at the bottom of the photo and the owner of the item will be notified. If the owner wants to give the item to you, they will send an email directly to you so be sure to keep an eye on your email!
                <br />
                    <br />
                If you have an item that you woould like to rehome, click the "+" button in the top right hand corner. Add a photo of your item along with a description and click "Post". Your item will appear in the main feed for your neighborhood.
                <br />
                After your post is live, you will be able to see how many people are interested in your item. If more than one person is interested in your item, you will be able to choose a winner and send them an email to arrange a time and place to exchange your item.
                <br />
                If possible, we highly suggest meeting in a public place to exchange your item instead of meeting at your home.
                <br/>
                <br/>
                To return to the login/register page, click "Home" in the drop down menu on the top left of the screen.
            </p>
            </Card>
        </Container>
    )
}

export default HowItWorks;