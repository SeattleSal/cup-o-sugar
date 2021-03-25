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

    // getAllPost dummy data 

    getAllPost() {

        const postData = [
            {
                name: "Tricycle",
                type: "give",
                status: "open",
                description: "One year old, almost new",
                picture: " https://cdn.pixabay.com/photo/2015/03/26/10/34/tricycle-691587_960_720.jpg",
                owner: "Talor Swift",
                responses: [
                    {
                        owner: " 604d24a2eb7588d074b6ad67 ",   //Taylor Swift ID
                        chosen: true,
                    }
                ]


            },

            {
                name: "Sofa",
                type: "give",
                status: "open",
                description: "Four years old, it has couple of stains on the side",
                picture: " https://cdn.pixabay.com/photo/2017/08/06/15/44/house-2593570_960_720.jpg",
                owner: "Chaka Khan",
                responses: [
                    {
                        owner: " 604d24a2eb7588d074b6ad68",   // Chaka Kahn Id
                        chosen: true,
                    }
                ]
            },

            {
                name: "Plant",
                type: "give",
                status: "open",
                description: "Cactus",
                picture: " https://cdn.pixabay.com/photo/2019/04/27/21/56/cactus-4161380_960_720.jpg",
                owner: "Mariah Cary",
                responses: [
                    {
                        owner: " 604d24a2eb7588d074b6ad69",    // Mariah Cary Id
                        chosen: true,
                    }
                ]

            },

            {
                name: "Scarf",
                type: "give",
                status: "open",
                description: "Homemade from alpaca yarn",
                picture: " https://cdn.pixabay.com/photo/2017/08/06/14/42/blanket-2593141_960_720.jpg",
                owner: "Shade",
                responses: [
                    {
                        owner: "604d24a2eb7588d074b6ad65 ",    //  Shade Id
                        chosen: true,
                    }

                ]
            },
        ];
        return postData;


    }

    //getPostByUser

    getPostByUser() {

        const postDataByUser = [
            {
                name: "Tricycle",
                type: "give",
                status: "open",
                description: "One year old, almost new",
                picture: " https://cdn.pixabay.com/photo/2017/08/06/15/44/house-2593570_960_720.jpg",
                owner: "Talor Swift",
                responses: [
                    {
                        owner: " Shade ",
                        chosen: true,
                    },
                    {
                        owner: " Mariah Cary ",
                        chosen: false,
                    }
                ]


            },

            {
                name: "Sofa",
                type: "give",
                status: "open",
                description: "Four years old, it has couple of stains on the side",
                picture: "https://cdn.pixabay.com/photo/2017/08/06/15/44/house-2593570_960_720.jpg",
                owner: "Talor Swift",
                responses: [
                    {
                        owner: "Mariah Cary ",
                        chosen: true,
                    },
                    {
                        owner: "Chaka Kahn ",
                        chosen: false,
                    }
                ]
            },

            {
                name: "Plant",
                type: "give",
                status: "open",
                description: "Cactus",
                picture: " https://cdn.pixabay.com/photo/2019/04/27/21/56/cactus-4161380_960_720.jpg",
                owner: "Talor Swift",
                responses: [
                    {
                        owner: " Chaka Kahn",
                        chosen: true,
                    },
                    {
                        owner: " Mariah Cary",
                        chosen: false,
                    }
                ]

            },

            {
                name: "Scarf",
                type: "give",
                status: "open",
                description: "Homemade from alpaca yarn",
                picture: " https://cdn.pixabay.com/photo/2017/08/06/14/42/blanket-2593141_960_720.jpg",
                owner: "Talor Swift",
                responses: [
                    {
                        owner: "Chaka Kahn",
                        chosen: true,
                    },
                    {
                        owner: "Shade ",
                        chosen: false,
                    }

                ]
            },
        ];
        return postDataByUser;

    }

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

    getUserbyID(id) {
        console.log("Getting user data by id: " + id);
        return this.axios.get("/api/user", id);
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