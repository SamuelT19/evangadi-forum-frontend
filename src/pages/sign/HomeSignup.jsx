import React, { useState } from "react";
import Signup from "../../components/signup/Signup";
import Login from "../../components/signup/Login";
import classes from "../../components/signup/homeSignup.module.css";

function HomeSignup() {
  const [showSignup, setShowSignup] = useState(false);

  const toggleContainer = () => {
    setShowSignup(!showSignup);
  };
  return (
    <div className={classes.homeSignup_outer_container}>
      <div className={classes.homeSignup_inner_container}>
        <div className={classes.sign_container}>
          {showSignup ? (
            <Signup toggleContainer={toggleContainer} showSignup={showSignup} />
          ) : (
            <Login toggleContainer={toggleContainer} showSignup={showSignup} />
          )}
        </div>

        <div className={classes.about}>
          <p>About</p>
          <h1>Evangadi Q&A Forum</h1>
          <div className={classes.description}>
            <p>
              Welcome to Evangadi Q&A Forum, the ultimate destination for
              knowledge seekers and problem solvers alike! This forum is an
              online space where users can ask questions and receive answers
              from other users or experts on various topics.
            </p>
            <p>
              Join our vibrant community of experts and enthusiasts to explore a
              wide range of topics, from technology and science to arts and
              culture. Ask questions, share your knowledge, and connect with
              like-minded individuals in a welcoming and respectful environment.
            </p>
            <p>
              Discover valuable insights, find solutions to your queries, and
              engage in meaningful conversations at Evangadi Q&A Forum. Join us
              today and embark on a journey of discovery and learning!
            </p>
          </div>

          <button>How it works</button>
        </div>
      </div>
    </div>
  );
}

export default HomeSignup;
