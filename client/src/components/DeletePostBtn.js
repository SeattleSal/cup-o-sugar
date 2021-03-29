import React from 'react';
import { Button } from 'react-bootstrap';
import API from '../utils/api';



const DeletePostBtn = (deletePost ) => {
    return (
        <Button className="delete-btn"  tabIndex="0" variant="outline-danger" onClick={deletePost} >Delete</Button>
    );
};

export default DeletePostBtn;