import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import SignupImage from "../../assets/Signup.svg";
import "./signup.css";
const Signup = () => {
  // intialize history
  let history = useHistory();
  // intialize by empty strings.
  const [credential, setCredential] = useState({ username: "", password: "" });
  // The preventDefault() method cancels the event if it is cancelable
  const handleSubmit = async (e) => {
    e.preventDefault();
    // destructure credential
    const { username, password } = credential;
    // making an fetch api call which return promise.
    const response = await fetch("https://quickrev.onrender.com/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // stringify convert json into string which is required by web browser.
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const json = await response.json();

    if (json.success) {
      // adding value of json.jwtData to token in local storage.
      localStorage.setItem("token", json.jwtData);
      history.push("/");
    } else {
      alert("Invalid Values");
    }
  };

  // conditional rendering and seting of data
  const handleChange = (value,field) => {
    setCredential({ ...credential, [field]: value });
  };

  return (
    <div className="signup-container">
      <div className="container-fluid vh-100" style={{ maxWidth: "1440px" }}>
        <div className="row">
          <div className="col-md-6 d-none d-md-block">
            <img
              className="img-fluid py-5 px-5"
              src={SignupImage}
              alt="signup"
            />
          </div>
          <div className="col-md-6">
            <div className="signup-header text-center">Sign up</div>
            <div className="signup-sub-header text-center mt-2">
              Please provide the required information to{" "}
              <span className="signup-sub-header1">create your account </span>
              and start exploring
            </div>
            <div className="signup-sub-header text-center mb-5">
              our
              <span className="signup-sub-header1">
                platform's exciting features
              </span>
              to log in and access
            </div>
            <div className="row justify-content-center">
              <Form.Group className="mb-3 col-12 col-sm-6">
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Username"
                  onChange={(e) => {
                    handleChange(e.target.value, "username");
                  }}
                  value={credential.username}
                />
              </Form.Group>
            </div>
            <div className="row justify-content-center">
              <Form.Group className="mb-3 col-12 col-sm-6">
                <Form.Control
                  size="lg"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    handleChange(e.target.value, "password");
                  }}
                  value={credential.password}
                />
              </Form.Group>
            </div>
            <div className="row justify-content-center px-2">
              <button
                type="button"
                onClick={handleSubmit}
                class="btn btn-primary col-12 col-sm-6 rounded py-2"
              >
                Sign up
              </button>
            </div>
            <div className="signup-footer text-center mt-2">
              Already have an account?
              <Link className="text-decoration-none" to="/">
                <span className="signup-sub-footer"> Log in</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
