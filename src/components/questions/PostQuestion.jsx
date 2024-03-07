import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppState } from "../../App";
import classes from "./QandA.module.css";
import Checker from "../checker/Checker";

function PostQuestion() {
  const { message, setmessage, logout } = useAppState();
  const username = sessionStorage.getItem("username");
  const userid = sessionStorage.getItem("userid");

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userid: userid,
    username: username,
    title: "",
    description: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError("");
  };
  const handleSubmit = async (e) => {
    await Checker({
      e,
      answer: false,
      formData,
      setError,
      logout,
      navigate,
      message,
      setmessage,
    });
  };

  return (
    <div className={classes.postQ_container}>
      <h2>Steps to write a good question</h2>
      <ul>
        <li>Sumerize your problem in a one-line title.</li>
        <li>Describe your problem in more detail.</li>
        <li>Describe what you tried and what you expected to happen.</li>
        <li>Renew your question and post it to the site.</li>
      </ul>
      <h1>Ask a public question</h1>
      <Link to="/all-questions">Go to Question page</Link>
      {error && <p className={classes.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          cols="30"
          rows="10"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className={classes.textarea}
          required
        ></textarea>
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

        <button type="submit" className={classes.btn}>
          {message?.waiting ? message.waiting : "Post Your Question"}
        </button>
      </form>
    </div>
  );
}

export default PostQuestion;
