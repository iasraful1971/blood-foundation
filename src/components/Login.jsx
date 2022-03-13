import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../extra/Spinner";
import useAuth from "../hooks/useAuth";
import logo from "../images/logo.png.png";

const Login = () => {

  const {loginUser ,loading , googleSignIn}= useAuth();
  const [loginData ,setLoginData] =useState({});

  const handleOnChange = (e) => {
    const field =e.target.name;
    const value = e.target.value;
    const newLogData = {...loginData};
    newLogData[field] =value;
    setLoginData(newLogData);
  }
  const handleLoginSubmit =(e) => {
    loginUser(loginData.email , loginData.password);
    e.preventDefault();
    return
  }


  return (
    <div className="register__container">
      <div className="form-area">
        <img src={logo} alt="" />
        <h1>
        তরঙ্গ
 <span className="blood">রক্তসেবায়
</span> লগ ইন করুন।
        </h1>
        <span>(please filled the form in English)</span>
        {!loading && <form onSubmit={handleLoginSubmit}>
          <TextField
            className="input-filed"
            fullWidth
            name="email"
            onChange={handleOnChange}
            label="Email"
            id="fullWidth"
          />
          <TextField
            name="password"
            onChange={handleOnChange}
            className="input-filed "
            fullWidth
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <div className="button-area">
            <button>Log In </button>
          </div>
          অথবা /
          <div onClick={ googleSignIn}
           className="google">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDqkRXVUTJavl1kxlIhufALwkRoDGiwcPaBQ&usqp=CAU"
              alt=""
            />
            <p>সরাসরি গুগল দিয়ে লগ ইন করুন। </p>
          </div>

        
        </form>}
        {
          loading && <Spinner/>
        }
        <div className="redirect">
          <Link to="/register">
            আপনি তরঙ্গ রক্তসেবায় নতুন? আগে রেজিষ্ট্রেশন করুন।
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
