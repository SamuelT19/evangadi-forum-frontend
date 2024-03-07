import React, { useEffect, useState } from "react";
import axiosBase from "../../endPoints/axios";
import RenderQuestion from "../../components/questions/RenderQuestion";
import { Link } from "react-router-dom";
import classes from "../../components/questions/QandA.module.css";
import { SyncLoader } from "react-spinners";

function AllQuestions() {
  const username = sessionStorage.getItem("username");
  const [questions, setQuestions] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axiosBase?.get("/questions/allQuestions");
      setQuestions(response?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  questions.sort((a, b) => b.id - a.id);

  return (
    <>
      <div className={classes.allQuestions_container}>
        {questions ? (
          <>
            <div className={classes.welcome}>
              <Link to="/postQuestion">Ask Question</Link>
              <p className={classes.username}>
                Hello: <span>{username}</span>
              </p>
            </div>

            <h1>All Questions</h1>
            {questions?.map((question, i) => (
              <RenderQuestion question={question} clickable={true} key={i} />
            ))}
          </>
        ) : (
          <SyncLoader color="#36d7b7" size={20} speedMultiplier={1.3} />
        )}
      </div>
    </>
  );
}

export default AllQuestions;
