import React, { useState } from "react";
import {Button} from "react-bootstrap";

const GetBtn = props => {

    const [buttonDisabled, setButtonDisabled] = useState(false);

    // disable button once the post item is claimed
    const handleButtonClick = (e) => {
        setButtonDisabled(true);
        props.onClick(e);
    }

    return (
        <Button className="get-btn rounded" {...props} 
                onClick = { handleButtonClick } 
                tabIndex="0" 
                disabled = { buttonDisabled }
                style={{backgroundColor:"rgba(95, 158, 160, 0.65)", color: "white" }}>
            {props.status === "open" ? "Get" : "Claimed"}
        </Button>
    );
};

export default GetBtn;