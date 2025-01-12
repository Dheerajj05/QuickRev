import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import LoginImage from "../../assets/login.svg";
import "./login.css";
const Login = () => {
  let history = useHistory();
  const [credential, setCredential] = useState({ username: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://quickrev.onrender.com/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: credential.username,
        password: credential.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem("token", json.jwtData);
      console.log("dheeraj");
      getUserData(json.jwtData);
    } else {
      alert("Invalid crediential");
    }
  };

  const handleChange = (value,field) => {
    
    setCredential({ ...credential, [field]:value  });
  };

  const getUserData = async (token) => {
    const response = await fetch("https://quickrev.onrender.com/user/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    const json = await response.json();
    console.log(json.sucess);
    if (json.success) {
      localStorage.setItem("userData", JSON.stringify(json));
      localStorage.setItem("isAuthenticated", true);
      history.push("home");
    } else {
      alert("Invalid credential");
    }
  };
  

  return (
    <div className="login-container">
      <div className="container-fluid vh-100 " style={{ maxWidth: "1440px" }}>
        <div className="row justify-content-center" >
          <div className="col-md-6 d-none d-md-block">
            <img className="img-fluid py-5 px-5" src={LoginImage} alt="Login" />
          </div>
          <div className="col-md-6">
            <div className="login-header text-center">Login</div>
            <div className="login-sub-header text-center mt-2">
              <span className="login-sub-header1">Welcome back!</span> Please
              enter your <span className="login-sub-header1">credentials</span>{" "}
              to log in and access
            </div>
            <div className="login-sub-header text-center mb-5">
              your account.
            </div>
            <div className="row justify-content-center">
              <Form.Group className="mb-3 col-12 col-sm-6">
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Username"
                  onChange={(e)=>{handleChange(e.target.value,"username")}}
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
                  onChange={(e)=>{handleChange(e.target.value,"password")}}
                  value={credential.password}
                />
              </Form.Group>
            </div>
            <div className="row justify-content-center px-2">
              <button type="button" onClick={handleSubmit} class="btn btn-primary col-12 col-sm-6 rounded py-2">
                Log in
              </button>
            </div>
            <div className="login-footer text-center mt-2">Don’t have an account? <Link className="text-decoration-none" to="/signup"> <span className="login-sub-footer">Sign up</span></Link></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
