import React from 'react';
// import { Container } from 'react-bootstrap';
import CreatePost from '../components/CreatePost';
import Footer from '../components/Footer';
import HeaderNav from '../components/HeaderNav';



function AddPost () {

    return (

        <div classname="addPost">

            <HeaderNav />
            <CreatePost />
            {/* <Footer /> */}
            
        </div>
    )
}

export default AddPost;