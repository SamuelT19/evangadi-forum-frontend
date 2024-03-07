import React from "react";
import evangadiLogo from "../../assets/evangadi-logo-black.png";

import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { useAppState } from "../../App";
function Header() {
  const { decode, logout } = useAppState();

  return (
    <div className={classes.header_outer_container}>
      <div className={classes.header_container}>
        <div className={classes.logo_container}>
          <Link to={decode ? "/all-questions" : "/"}>
            <img src={evangadiLogo} alt="Evangadi logo" />
          </Link>
        </div>
        <div className={classes.header_links}>
          <div className={classes.link_hide}>
            <Link to={decode ? "/all-questions" : "/"}>
              <p>Home</p>
            </Link>
          </div>
          <div className={classes.link_hide}>
            <Link to={"/all-questions"}>
              <p>How it Works</p>
            </Link>
          </div>

          {decode && (
            <div className={classes.signin_link}>
              <Link to={"/"}>
                <button onClick={() => logout()} className={classes.logout}>Log out</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
