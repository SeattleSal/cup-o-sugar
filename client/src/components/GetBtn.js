import React from "react";
import {Button} from "react-bootstrap";

const GetBtn = props => {
    return (
        <Button className="get-btn rounded" {...props} tabIndex="0" style={{backgroundColor:"rgba(95, 158, 160, 0.65)", color: "white" }}>Get</Button>
    );
};

export default GetBtn;