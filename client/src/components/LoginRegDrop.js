import React from 'react';

import {Dropdown} from 'react-bootstrap';
// import {DropdownButton} from 'react-bootstrap/DropdownButton';



function LoginRegDrop() {

    return (

        // <div className="login-options">
        //           <p>
        //             <button className="btn btn-primary loginBtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
        //               aria-expanded="false" aria-controls="collapseExample">
        //               Login
        //                 </button>
        //             <button className="btn btn-primary loginBtn" type="button" data-bs-toggle="collapse"
        //               data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
        //               Register
        //                 </button>
        //           </p>
        //           <div className="collapse" id="collapseExample">
        //             <div className="card card-body">
        //               <input className="form-control form-control-sm" type="text" placeholder="Enter email"
        //                 aria-label=".form-control-sm example"></input>
        //               <input className="form-control form-control-sm" type="password" placeholder="Enter password"
        //                 aria-label=".form-control-sm example"></input>
        //               <button type="submit" className="btn btn-primary" id="loginBtn">Login</button>
        //             </div>
        //           </div>
        //           <div className="collapse" id="collapseExample2">
        //             <div className="card card-body">
        //               <input className="form-control form-control-sm" type="text" placeholder="Enter Name"
        //                 aria-label=".form-control-sm example"></input>
        //               <select className="form-select" id="specificSizeSelect">
        //                 <option selected>Choose...</option>
        //                 <option value="1">ZipCode 1</option>
        //                 <option value="2">ZipCode 2</option>
        //                 <option value="3">ZipCode 3</option>
        //               </select>
        //               <input className="form-control form-control-sm" type="text" placeholder="Enter email"
        //                 aria-label=".form-control-sm example"></input>
        //               <input className="form-control form-control-sm" type="password" placeholder="Enter password"
        //                 aria-label=".form-control-sm example"></input>
        //               <button type="submit" className="btn btn-primary" id="registerBtn">Register</button>
        //             </div>
        //           </div>

        //         </div>

        <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

    )
}

export default LoginRegDrop;