// global store for user info
import React,{ createContext, useContext } from "react";

const UserContext = createContext({
    _id: "",
    name: "",
    email: "",
    neighborhood: "",
    post: [],
    responses: []
}
// , { usePushEach: true, }
);

export default UserContext;

// const { Provider } = UserContext;
// export { UserProvider };