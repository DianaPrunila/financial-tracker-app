import { Link } from "react-router-dom";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex fixed w-full justify-between bg-bkGd text-lg text-small ">
      <div className="flex ">
        <div className=" copy-right text-center p-4 ">
          © Copyright 2025{" "}
          <a className="text-reset fw-bold" href="/">
            Diana{" "}
          </a>
          I All Rights Reserved
        </div>
        <div className="footer-icons flex  items-center text-small icons">
          <Link to="https://www.facebook.com/">
            <div className="fb">
              <FaFacebook />
            </div>
          </Link>
          <Link to="https://x.com/home">
            <div className="twitter">
              <FaTwitter />
            </div>
          </Link>
          <Link to="https://www.linkedin.com/">
            <div className="likedIn">
              <FaLinkedin />
            </div>
          </Link>
          <Link to="https://www.youtube.com/">
            <div className="YT">
              <FaYoutube />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
