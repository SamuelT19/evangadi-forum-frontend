import React from "react";
import classes from "./footer.module.css";
import evangadiLogoWhite from "../../assets/evangadi-logo-white.png";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className={classes.footer_outer_container}>
      <div className={classes.footer_container}>
        <div>
          <img src={evangadiLogoWhite} alt="evangadi-logo" />
          <div className={classes.social_media}>
            <FacebookIcon sx={{ fontSize: 32 }} />
            <InstagramIcon sx={{ fontSize: 32 }} />
            <YouTubeIcon sx={{ fontSize: 40 }} />
          </div>
        </div>
        <div>
          <h2>Useful Link</h2>
          <div className={classes.fade}>
            <Link to="/">
              <p>How it works</p>
            </Link>
            <Link to="/">
              <p>Terms of Services</p>
            </Link>
            <Link to="/">
              <p>Privacy Policy</p>
            </Link>
          </div>
        </div>
        <div>
          <h2>Contact Info</h2>
          <div className={classes.fade}>
            <p>Evangadi Networks</p>
            <p>support@evangadi.com</p>
            <p>+1 234-567-890</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
