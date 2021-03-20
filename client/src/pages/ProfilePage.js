import HeaderNav from "../components/HeaderNav";
import {Profile} from "../components/Profile";
import {Container} from "react-bootstrap";

function GuidelinesPage() {
    return (
    <Container className="profilePage">
        <HeaderNav />
        <Profile />
    </Container>
    );
};

export default GuidelinesPage;