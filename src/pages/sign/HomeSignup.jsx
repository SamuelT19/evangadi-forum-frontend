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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              ullam quae molestias, magnam veritatis non exercitationem enim
              aperiam ea tempora. Necessitatibus, sit facere! Voluptas eum
              laboriosam eligendi, at ipsam magnam.
            </p>
            <p>
              Illum earum maxime expedita recusandae iste, architecto, sed odio,
              voluptatum nisi ab excepturi deserunt possimus dolorum itaque
              quibusdam consequatur ipsa perspiciatis! Quae molestiae ipsum
              numquam nisi asperiores, quas adipisci atque?
            </p>
            <p>
              Facere dolorem maiores dolor consequuntur. Non, ad quibusdam?
              Culpa necessitatibus quasi, odit eius numquam sit doloremque
              inventore amet aspernatur temporibus maiores quia, eaque dolorum
              facilis minima enim illo unde at.
            </p>
          </div>

          <button>How it works</button>
        </div>
      </div>
    </div>
  );
}

export default HomeSignup;
