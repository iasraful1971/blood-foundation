import { Alert } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../extra/Spinner";
import useAuth from "../hooks/useAuth";
import logo from "../images/logo.png.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});
 
  const { user, registerUser, loading, error } = useAuth();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLogData = { ...loginData };
    newLogData[field] = value;
    setLoginData(newLogData);
    
  };


  const handleRegisterSubmit = (e) => {
    if (loginData.password !== loginData.cpassword) {
      toast.error("Password don't match");
      return;
    }
    registerUser(loginData.email, loginData.password);
    e.preventDefault();
  };

  

  return (
    <div className="register__container">
      <div className="form-area">
        <img src={logo} alt="" />
        <h1>
        তরঙ্গ <span className="blood">রক্তসেবায়</span> ফাউন্ডেশনে অ্যাকাউন্ট
          তৈরী করুন।
        </h1>
        <span>(please filled the form in English)</span>
        {!loading && (
          <form onSubmit={handleRegisterSubmit}>
            <div className="flex-input">
              <TextField
                className="input-filed"
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                fullWidth
              />
              <TextField
                className="input-filed"
                fullWidth
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
            </div>
            <TextField
              className="input-filed"
              fullWidth
              label="Email"
              id="fullWidth"
              name="email"
              onChange={handleOnChange}
            />
            <TextField
              className="input-filed "
              fullWidth
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              name="password"
              onChange={handleOnChange}
            />
            <TextField
              className="input-filed"
              fullWidth
              id="outlined-password-input"
              label="Confirm Password"
              type="password"
              autoComplete="current-password"
              name="cpassword"
              onChange={handleOnChange}
            />
            <br /> <br />
            <input c className="terms" type="checkbox" name="" id="" /> I agree
            with Tarangga <span className="blood ">Raktaseba's</span>
            terms and conditions.
            <br /> <br />
            {user?.email && (
              <Alert severity="success">
                Congratulations! You've successfully Create an account to
                Tarangga <span className="blood">Raktaseba</span>.
              </Alert>
            )}
            {error ? (
              <Alert severity="error">This is an error message!</Alert>
            ) : (
              ""
            )}
            <div className="button-area">
              <button>Register </button>
            </div>
          </form>
        )}
        {loading && <Spinner />}
        <div className="redirect">
          <Link to="/login">আমার অলরেডি একাউন্ট রয়েছে।</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
