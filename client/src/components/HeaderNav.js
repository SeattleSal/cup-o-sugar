import React from 'react';



function HeaderNav () {

    return (

        <div className="jumbotron jumbotron-fluid text-center col-12">
              <div className="navContainer">

                <p>
                
                  <a className="btn btn-primary fas fa-bars" data-bs-toggle="collapse"  role="button"
                    aria-expanded="false" aria-controls="collapse"></a>
                </p>

                <h1 >Cup of Sugar</h1>

                <p>
                
                  <a className="nav-link btn btn-primary fas fa-plus" href="#"></a>
                </p>

              </div>

              <div className="collapse" id="navigateOpts">
                <div className="card card-body">
                  <a className="dropdown-item" >Profile</a>
                  <a className="dropdown-item" >How it Works</a>
                  <a className="dropdown-item" >Guidelines</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" >Log Out</a>
                </div>
              </div>

            </div>
    )
}

export default HeaderNav;