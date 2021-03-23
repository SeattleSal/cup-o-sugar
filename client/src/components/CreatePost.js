import React, { useState, useRef } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import API from "../utils/api";

function CreatePost() {
  const [state, setState] = useState({
    postName: "",
    postDescription: "",
    image: "",
    type: "give",
    status: "open",
  });
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const uploadRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    console.log(file);
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Post Submitted...");

    if (!previewSource) return;
    // const reader = new FileReader();
    // reader.readAsDataURL(selectedFile);
    // uploadImage(previewSource);
    console.log(uploadRef.current.files[0]);
    console.log(previewSource)

    let fd = new FormData();
    fd.append("owner", "Joe");
    fd.append("name", state.postName);
    fd.append("description", state.postDescription);
    fd.append("file", previewSource);
    fd.append("type", "give");
    fd.append("status", "open");

    API.createPost(fd)
      .then((dbPost) => {
        console.log("Post posted");
        console.log(dbPost);
      })
      .catch((err) => console.log("Post creation error: " + err));

    // const postData = {
    //     owner: "Joe",
    //     name: state.postName,
    //     description: state.postDescription,
    //     // what should I be sending to backend for image?
    //     file: [selectedFile],
    //     type: "give",
    //     status: "open"
    // }
    // console.log(postData);

    // const reader = new FileReader();
    // reader.readAsDataURL(selectedFile);
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        style={{ marginLeft: "2rem", marginRight: "2rem" }}
      >
        <h3
          className="postOwnerName"
          style={{ fontFamily: "'Lobster', cursive" }}
        >
          Owner Name
        </h3>

        <Form.Control
          type="text"
          name="postName"
          value={state.postName}
          onChange={handleInputChange}
          placeholder="Item Name"
        />
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={3}
            name="postDescription"
            value={state.postDescription}
            onChange={handleInputChange}
            placeholder="Description"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Upload a Photo</Form.Label>
          <Form.File
            id="exampleFormControlFile1"
            type="file"
            label="Example file input"
            accept=".jpg, .png, .jpeg"
            // value={fileInputState}
            ref={uploadRef}
            onChange={handleFileInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Post
        </Button>
      </Form>
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
      )}
    </div>

    //Redirect to FeedPage after submit
  );
}

export default CreatePost;
