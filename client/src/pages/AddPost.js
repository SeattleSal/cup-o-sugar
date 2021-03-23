import React from 'react';
import { Container } from 'react-bootstrap';
import CreatePost from '../components/CreatePost';
import Footer from '../components/Footer';
import HeaderNav from '../components/HeaderNav';



function AddPost () {

    return (

        <Container className="addPost">

            <HeaderNav />
            <CreatePost />
            <Footer />
            
        </Container>
    )
}

export default AddPost;