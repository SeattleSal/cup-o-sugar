import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import API from '../utils/api';

function CreatePost() {
    const [state, setState] = useState({
        // fileInputState: "",
        // selectedFile: "",
        postName: "",
        postDescription: "",
        image: "",
        type: "give",
        status: "open"
    })
    const [fileInputState, setFileInputState] = useState("");
    const [selectedFile, setSelectedFile] = useState("");
    const [previewSource, setPreviewSource] = useState("");
    // const [postName, setPostName] = useState("");
    // const [postDescription, setPostDescription] = useState("");

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({...state, [name] : value});
    }

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        console.log(file)
        // previewFile(file);
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle image data
        if(!previewSource) return;
        // const reader = new FileReader();
        // reader.readAsDataURL(selectedFile);
        console.log("Post Submitted...");
        // uploadImage(previewSource);

        const postData = {
            owner: "Joe",
            name: state.postName,
            description: state.postDescription,
            file: selectedFile,
            type: "give",
            status: "open"
        }
        // console.log(postData);
        API.createPost(postData)
        .then((dbPost) => {
            console.log("Post posted")
            console.log(dbPost)
        })
        .catch(err => console.log("Post creation error: " + err))
        // check if stuff is blank
        // if(!selectedFile) return;
        // const reader = new FileReader();
        // reader.readAsDataURL(selectedFile);
    }

    // const uploadImage = (base64EncodedImage) => {
    //     console.log(base64EncodedImage);
    //     try { 
    //         await fetch('/api/upload', {
    //             method: 'POST',
    //             body: JSON.stringify({data: base64EncodedImage}),
    //             header: {'Content-type': 'application/json'}
    //         })
    //     } catch ( error ) {
    //         console.log(error)
    //     };
    // }

    return (

        <div>
        <Form onSubmit={handleSubmit}>

            <h3 className="postOwnerName">Placeholder for Owner Name</h3>
            <Form.Control 
                type="text" 
                name="postName"
                value={state.postName}
                onChange={handleInputChange}
                placeholder="Item Name" />
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} 
                name="postDescription"
                value={state.postDescription} 
                onChange={handleInputChange}
                placeholder="Description"/>
            </Form.Group>
            <Form.Group>
            <Form.Label>Upload a Photo</Form.Label>
                <Form.File id="exampleFormControlFile1" 
                            type="file"
                            label="Example file input" 
                            value={fileInputState}
                            onChange={handleFileInputChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" >
                Post
            </Button>
        </Form>
        {previewSource && (
            <img src={previewSource} alt="chosen" style={{height: '300px'}} />
        )}
        </div>

        //Redirect to FeedPage after submit

    );
};

export default CreatePost;