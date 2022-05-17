import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  const IMG =
    "https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWxvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60";
  return (
    <div>
      <section id="header">
        <div className="container">
          <div className=" row " > 
            <div className="col-lg-8 row-6">
              <div className="common_heading">
              <h1>
             {props.name} <strong>devendra bhuarya</strong>
              </h1>
              <h2 className="my-3">
                there are some netflix show watch and enjoy now
              </h2>
              <div className="mt-3">
                <NavLink to={props.visit} className="btn btn-outline-success">
                   {props.btnName}
                </NavLink>
              </div>
              </div>
            </div>
            
            <div className="col-lg-4 row-6">
              <img src={IMG} className='img-fluid animated"' alt="reload" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Common;
