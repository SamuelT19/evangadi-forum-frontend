import React, { useState } from "react";
import axiosBase from "../../endPoints/axios";
import classes from "./homeSignup.module.css";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../../App";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

function Signup({ toggleContainer, showSignup }) {
  const { message, setmessage } = useAppState();

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });

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
      await axiosBase.post("/users/signup", formData);
      console.log("user signed up successfully");
      setmessage({
        waiting: "",
        success: "Signed up succesfully. Redirecting to login page....",
      });
      setTimeout(() => {
        navigate("/all-questions");
        setmessage({
          waiting: "",
          success: "",
        });
      }, 3000);
    } catch (error) {
      console.log(error?.response?.data?.msg);
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
        showSignup
          ? classes.signup_container
          : `${classes.signup_container} ${classes.container_hidden}`
      }
    >
      <h3>Join the Network</h3>
      <p>Already have an account?</p>
      <span>
        <button className={classes.textBtn} onClick={toggleContainer}>
          Sign in
        </button>
      </span>
      <form onSubmit={handleSubmit}>
        <div className={classes.input_flex}>
          <input
            className={classes.item1}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className={classes.name}>
            <input
              className={classes.item2}
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
            <input
              className={classes.item3}
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>

          <input
            className={classes.item4}
            type="text"
            name="username"
            placeholder="User Name"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <div className={classes.password}>
            <input
              className={classes.item5}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              minLength={8}
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
          {error && <h4 style={{ color: "red" }}>{error}</h4>}
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
            {message.waiting ? message.waiting : "Agree And Sign up"}
          </button>
        </div>
      </form>
      <p>I agree to the privacy policy and terms of service.</p>
      <button className={classes.textBtn} onClick={toggleContainer}>
        Aready have an account?
      </button>
    </div>
  );
}

export default Signup;
