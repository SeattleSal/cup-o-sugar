import React from 'react';
// import { Container } from 'react-bootstrap';
import CreatePost from '../components/CreatePost';
import CreatePostImage from '../components/CreatePostImage';
import Footer from '../components/Footer';
import HeaderNav from '../components/HeaderNav';


function AddPost () {

    return (

        <div className="addPost">

            <HeaderNav />
            <CreatePostImage />
            <CreatePost />
            <Footer />
            
        </div>
    )
}

export default AddPost;