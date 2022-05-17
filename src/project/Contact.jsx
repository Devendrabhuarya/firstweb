import React from "react";
import { useState } from "react";

const Contact = () => {
  const [data, setdata] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setdata((preVal) => {
      return {
        ...data,
        [name]: value,
      };
    }, []);
  };
  console.log(data);
  console.log(data.l);
  console.log(data.fullname);
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`welcome 😉 your  name is ${data.fullname} email id is ${data.email}  `);
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> contact us</h1>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 co-10 mx-auto">
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label for="exampleInput2" className="form-label">
                    FullName
                  </label>
                  <input
                    
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="fullname"
                    value={data.fullname}
                    onChange={inputEvent}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
               
                <div className="mb-3">
                  <label for="exampleInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={data.email}
                    onChange={inputEvent}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>

                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    value={data.password}
                    onChange={inputEvent}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-outline-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
