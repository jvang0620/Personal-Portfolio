import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* <InstagramIcon /> */}
        {/* <TwitterIcon /> */}
        {/* <FacebookIcon /> */}

        {/*LinkedIn  */}
        <a href="https://www.linkedin.com/in/jvang23/" target="_blank" title="LinkedIn" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2024 Jai Vang</p>
    </div>
  );
}

export default Footer;