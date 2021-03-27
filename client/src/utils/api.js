import axios from "axios";

class API {

    axios;

    constructor() {

        this.axios = axios.create();

    }

    /**
     * @param {String} name 
     * @param {String} value 
     */
    setHeader(name, value) {

        if (value)

            this.axios.defaults.headers.common[name] = value;

        else

            delete this.axios.defaults.headers.common[name];

    }

    /**
     * @param {object} userData 
     * @param {String} userData.email
     * @param {String} userData.password
     * @param {String} userData.name
     * @param {String} userData.neighborhood
     * 
     * @returns {Promise}
     */
    register(userData) {
        console.log("Registered User:")
        console.log(userData)

        return this.axios.post("/api/authentication/register", userData);

    }


    /**
     * @param {object} userData 
     * @param {String} userData.email
     * @param {String} userData.password
     * 
     * @returns {Promise}
     */
    login(userData) {
        console.log("Login User:")
        console.log(userData)

        return this.axios.post("/api/authentication/login", userData);

    }

    authenticated() {

        return this.axios.post("/api/authentication/authenticated");

    }

    // --- END OF AUTH API CALLS --- //

    // get all Posts
    getAllPost() {
        return axios.get("/api/post");
    }

    //getPostByUser
    getPostsByUser() {
        return axios.get("/api/post/user/");
    }

    // Create post
    createPost(postData) {
        console.log("Posting data: ")
        console.log(postData)
        return this.axios.post("/api/post", postData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    // Update Post when chosen by user
    // id = post ID
    // postData = { "status": "closed", "responseOwner": userID}
    updatePost(id, postData) {
        console.log("Updating Post" + id);
        return this.axios.put("/api/post/" + id, postData);
    }

    // Delete a post
    // id = post ID
    deletePost(id) {
        console.log("Deleting post " + id);
        return this.axios.delete("/api/post/" + id);
    }

}

export default new API();