import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import API from "../utils/api";
import { Container } from 'react-bootstrap';

function CreatePost() {

  const [state, setState] = useState({
    postName: "",
    postDescription: "",
    image: "",
    type: "give",
    status: "open",
  });
  const [selectedFile, setSelectedFile] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [previewSource, setPreviewSource] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    // set selectedFile and selectedFileName for upload
    setSelectedFile(file);
    setSelectedFileName(file.name);
    // set previewFile for image preview in PostPage
    previewFile(file);
  };

  // show preview of file to be uploaded in page
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  // submit file and post data from form
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Post Submitted...");

    // check for inputs - add error message?
    if (!selectedFile) return;
    if (!state.postName) return;
    if (!state.postDescription) return;

    // debugging files sent
    // console.log("Selected File: ");
    // console.log(selectedFile);
    // console.log("Selected File Name: " + selectedFileName)

    // create FormData
    let fd = new FormData();
    fd.append("owner", "60596015b41879509463a6ef");
    fd.append("name", state.postName);
    fd.append("description", state.postDescription);
    fd.append("image", selectedFile, selectedFileName);
    fd.append("type", "give");
    fd.append("status", "open");

    API.createPost(fd)
      .then((dbPost) => {
        // change this to Link
        window.location.href = "/feed";
      })
      .catch((err) => console.log("Post creation error: " + err));
  };

  return (
    <Container>
      <Form
        onSubmit={handleSubmit}
        style={{ fontFamily:"'Montserrat', sans-serif"}}
      >
        <h3
          className="postOwnerName"
          style={{ fontFamily: "'Lobster', cursive", color: "rgba(95, 158, 160, 0.95)" }}
        >
          Give something away...
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
            accept=".jpg, .png, .jpeg"
            onChange={handleFileInputChange}
          />
        </Form.Group>
        <Button variant="outline-primary" type="submit">
          Post
        </Button>
      </Form>
      {previewSource && (
        <div>
          <h2>Image Preview:</h2>
          <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
        </div>
      )}
    </Container>

  );
}

export default CreatePost;
