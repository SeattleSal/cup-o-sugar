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

    // end of auth API calls 

    

    getAllPost() {

        // Gets all posts  
        return axios.get("/api/post");

    }

    //getPostByUser

    getPostByUser(id) {

       
        // Gets the post with the given id
        return axios.get("/api/post/" + id);

    }



    // Add this later onse there is a delete button option and save button option

    // Deletes the post with the given id

    //   return axios.delete("/api/posts/" + id);

    // Saves a post to the database

    //   return axios.post("/api/posts", postData);



    //create post
    createPost(postData) {
        console.log("Posting data: ")
        console.log(postData)
        return this.axios.post("/api/post", postData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }


    //getResponse

    // getResponse() {

    //     const responseData = [
    //         {
    //             owner: "Talor Swift",
    //             owner: "",
    //             chosen: true,

    //         },

    //         {
    //             owner: "Chaka Khan",
    //             owner: "",
    //             chosen: false,


    //         },

    //         {
    //             owner: "Mariah Cary",
    //             owner: "",
    //             chosen: true,


    //         },

    //         {

    //             owner: "Shade",
    //             owner: "",
    //             chosen: false,

    //         },
    //     ]
    //     return responseData;

    // }


    //delete a post-wait



}

export default new API();