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
    setHeader( name, value ) {

        if( value )

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
    register( userData ) {
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
    login( userData ) {

        return this.axios.post("/api/authentication/login", userData);

    }

    authenticated() {

        return this.axios.post("/api/authentication/authenticated");

    }

}

export default new API();