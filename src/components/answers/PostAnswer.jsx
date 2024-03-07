import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppState } from "../../App";
import classes from "../questions/QandA.module.css";
import Checker from "../checker/Checker";

function PostAnswer({ questionid }) {
  const { message, setmessage,logout } = useAppState();
  const username = sessionStorage.getItem("username");
  const userid = sessionStorage.getItem("userid");

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userid: userid,
    username: username,
    questionid: questionid,
    answer: "",
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
      answer: true,
      formData,
      setError,
      logout,
      navigate,
      message,
      setmessage,
    });
  };
  return (
    <div className={classes.postA_container}>
      <h1>Answer to the top question</h1>
      <Link to="/all-questions">Go to Question page</Link>
      {error && <p className={classes.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <textarea
          name="answer"
          cols="30"
          rows="10"
          value={formData.answer}
          onChange={handleChange}
          required
        ></textarea>
        {message?.success && (
          <h4 style={{ color: "green", fontStyle: "oblique" , paddingBlock: '5px'}}>
            {message.success}
          </h4>
        )}

        <button type="submit" className={classes.btn}>
          Post Your Answer
        </button>
      </form>
    </div>
  );
}

export default PostAnswer;
