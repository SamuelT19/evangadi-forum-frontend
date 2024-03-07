import React, { useEffect, useState } from "react";
import axiosBase from "../../endPoints/axios";
import classes from "../questions/QandA.module.css";
import profileAvatar from "../../assets/profile_avater.png";

function AllAnswers({ questionid }) {
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axiosBase?.get(`/answers/${questionid}`);
        setAnswers(response?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [questionid]);
  answers.sort((a, b) => b.answerid - a.answerid);
  
  return (
    <>
      <div>
        <div>
          <h1>Answers from the community</h1>
        </div>
        {answers.length > 0 ? (
          answers.map((answer, i) => (
            <div key={i} className={classes.singleQuestion_container}>
              <div className={classes.userProfile}>
                <img src={profileAvatar} alt="profile-avatar" />
                <h4>{answer?.username}</h4>
              </div>
              <div>
                <p>Answer: {answer?.answer}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No answers yet..</p>
        )}
      </div>
    </>
  );
}

export default AllAnswers;
