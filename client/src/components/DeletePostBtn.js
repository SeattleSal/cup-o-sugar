import React from 'react';
import { Button } from 'react-bootstrap';
import API from '../utils/api';



const DeletePostBtn = (deletePost ) => {
    return (
        //   <span className="delete-btn" {...props} role="button" tabIndex="0">
        //     ✗
        //   </span>
        <Button className="delete-btn"  tabIndex="0" variant="outline-danger" onClick={deletePost} >Delete</Button>
    );
};

export default DeletePostBtn;