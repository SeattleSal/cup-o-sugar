// global store for user info
import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = props => {
    const [user, setUser] = useState("Test");
    return (
        <UserContext.Provider value={[ user, setUser ]}>
            {props.children}
        </UserContext.Provider>
    );
}

// const initialState = {
//     _id: "",
//     name: "",
//     email: "",
//     neighborhood: "",
//     post: [],
//     responses: []
// };

// const reducer = (state, action) => {
//     switch(action.type) {
//         case 'SET_USER':
//             return {
//                 ...state
//                 // user: action.payload
//             }
//         default:
//             return state;
//     }
// }



// export const UserStore = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     return (
//         <UserContext.Provider value={[state, dispatch]}>
//             { children }
//         </UserContext.Provider>
//     )

// }

// export default UserContext;

// const { Provider } = UserContext;
// , { usePushEach: true, });
// export const UserProvider = ( { children }) => {

//     return <Provider value={user}> { children } </Provider>
// }

// export const useUserContext = () => {
//     return useContext(UserContext);
// }

{/* const { Provider } = UserContext; */}
{/* export { UserContext, useUserContext }; */}