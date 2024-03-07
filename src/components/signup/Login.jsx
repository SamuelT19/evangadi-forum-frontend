import React, { useState } from "react";
import classes from "./homeSignup.module.css";
import axiosBase from "../../endPoints/axios";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../../App";
// import { eye } from '../../assets/eye_icon.png';
// import { eye_hide } from '../../assets/eye_hidden_icon.png';
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

function Login({ toggleContainer, showSignup }) {
  const navigate = useNavigate();
  const { message, setmessage } = useAppState();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError("");
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setmessage({
      waiting: "Please wait...",
      success: "",
    });

    try {
      const res = await axiosBase?.post("/users/login", formData);
      console.log("Logged in successfully");
      setmessage({
        waiting: "",
        success: "Logged in succesfully.",
      });
      const token = res.data.token;
      const username = res.data.username;
      const userid = res.data.userid;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("userid", userid);
      setTimeout(() => {
        navigate("/all-questions");
        setmessage({
          waiting: "",
          success: "",
        });
      }, 3000);
    } catch (error) {
      console.log(error?.response.data?.msg);
      setmessage({
        waiting: "",
        success: "",
      });
      setError(error?.response?.data?.msg);
    }
  };
  return (
    <div
      className={
        !showSignup
          ? classes.signin_container
          : `${classes.signin_container} ${classes.container_hidden}`
      }
    >
      <h3>Login to your account</h3>
      <div>
        <p>Don't have an account? </p>
        <span>
          <button className={classes.textBtn} onClick={toggleContainer}>
            Create a new account
          </button>
        </span>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div className={classes.password}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Your Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span
            className={classes.eye}
            onClick={handleTogglePasswordVisibility}
          >
            {showPassword ? (
              <VisibilityIcon />
            ) : (
              <VisibilityOffIcon style={{ opacity: 0.5 }} />
            )}
          </span>
        </div>

        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        {message?.success && (
          <h4
            style={{
              color: "green",
              fontStyle: "oblique",
              paddingBlock: "5px",
            }}
          >
            {message.success}
          </h4>
        )}
        <button type="submit">
          {message.waiting ? message.waiting : "Login"}
        </button>
      </form>
      <button className={classes.textBtn} onClick={toggleContainer}>
        Create an account ?
      </button>
    </div>
  );
}

export default Login;
