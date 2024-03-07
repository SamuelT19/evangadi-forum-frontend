import React, { useState } from "react";
import { Link } from "react-router-dom";
import profileAvatar from "../../assets/profile_avater.png";
import profileAvatarBlack from "../../assets/black_profile_avatar.png";
import classes from "./QandA.module.css";

function RenderQuestion({ question, clickable }) {
  const { questionid, title, description, username, userid } = question;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      {clickable ? (
        <Link to={`/singleQuestion/${questionid}`}>
          <div
            key={userid}
            className={`${classes.singleQuestion_container} ${classes.hoverEffect}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={classes.userProfile}>
              <img
                src={isHovered ? profileAvatarBlack : profileAvatar}
                alt="profile-avatar"
              />
              <h4>{username}</h4>
            </div>
            <h3>{title}</h3>
          </div>
        </Link>
      ) : (
        <div key={userid} className={classes.singleQuestion_container}>
          <div className={classes.userProfile}>
            <img src={profileAvatar} alt="profile-avatar" />
            <h4>{username}</h4>
          </div>
          <div>
            <h3>{title}</h3>
            <p>Description: {description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RenderQuestion;
