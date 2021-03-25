// global store for user info
import React,{ createContext, useContext, useReducer } from "react";

const UserContext = createContext({
    _id: "",
    name: "",
    // email: "",
    neighborhood: "",
    post: [],
    responses: []
}
// , { usePushEach: true, }
);

const { Provider } = UserContext;

export { UserProvider };