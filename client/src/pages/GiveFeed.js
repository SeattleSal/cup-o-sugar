import HeaderNav from "../components/HeaderNav";
import FeedTabs from "../components/FeedTabs";
import { Container } from "react-bootstrap";


function GiveFeed() {
    return (
        < Container className="giveFeed" >
            < HeaderNav />
            <FeedTabs />
        </Container >
    );
};

export default GiveFeed;