import { Link } from "react-router-dom";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 flex w-full flex-wrap items-center justify-between bg-bkGd p-4">
      <div className="copy-right ml-4 text-center">
        © Copyright 2025{" "}
        <a className="text-reset fw-bold" href="/">
          Diana{" "}
        </a>
        | All Rights Reserved
      </div>
      <div
        className="footer-icons flex items-center"
        style={{ marginRight: "5.5rem" }}
      >
        <Link to="https://www.facebook.com/">
          <div className="fb m-2">
            <FaFacebook />
          </div>
        </Link>
        <Link to="https://x.com/home">
          <div className="twitter m-2">
            <FaTwitter />
          </div>
        </Link>
        <Link to="https://www.linkedin.com/">
          <div className="likedIn m-2">
            <FaLinkedin />
          </div>
        </Link>
        <Link to="https://www.youtube.com/">
          <div className="YT m-2">
            <FaYoutube />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
