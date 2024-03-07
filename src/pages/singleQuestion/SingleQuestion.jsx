import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RenderQuestion from "../../components/questions/RenderQuestion";
import axiosBase from "../../endPoints/axios";
import PostAnswer from "../../components/answers/PostAnswer";
import AllAnswers from "../../components/answers/allAnswer";
import classes from "../../components/questions/QandA.module.css";
import { SyncLoader } from "react-spinners";

function SingleQuestion() {
  const [question, setQuestion] = useState({});
  const { questionid } = useParams();

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const res = await axiosBase?.get(`/questions/${questionid}`);
        setQuestion(res?.data);
      } catch (error) {
        console.log(error?.response?.data?.error);
      }
    };

    fetchQuestion();
  }, []);

  return (
    <>
      {question ? (
        <div className={classes.singlePage_container}>
          <RenderQuestion question={question} />

          <hr />
          <hr />

          <PostAnswer questionid={questionid} />
          <hr />
          <hr />
          <AllAnswers questionid={questionid} />
        </div>
      ) : (
        <SyncLoader color="#36d7b7" size={20} speedMultiplier={1.3} />
      )}
    </>
  );
}

export default SingleQuestion;
