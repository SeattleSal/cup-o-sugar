import React from 'react';
import { Button } from 'react-bootstrap';



const DeletePostBtn = props => {
    return (
        //   <span className="delete-btn" {...props} role="button" tabIndex="0">
        //     ✗
        //   </span>
        <Button className="delete-btn" {...props} tabIndex="0" variant="danger">Delete</Button>
    );
};

export default DeletePostBtn;