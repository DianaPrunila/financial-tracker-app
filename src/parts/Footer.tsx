import { Link } from "react-router-dom";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 z-50 flex w-full flex-wrap items-center justify-between bg-bkGd px-4 py-3">
      <div id="copyright" className="ml-4 text-center">
        © Copyright 2025{" "}
        <a className="font-bold" href="/">
          Diana{" "}
        </a>
        | All Rights Reserved
      </div>
      <div
        id="footer-icons"
        className="mr-24 flex items-center"
        // style={{ marginRight: "5.5rem" }}
      >
        <Link id="FB" to="https://www.facebook.com/">
          <div className="m-2">
            <FaFacebook />
          </div>
        </Link>
        <Link id="Twitter" to="https://x.com/home">
          <div className="m-2">
            <FaTwitter />
          </div>
        </Link>
        <Link id="LinkedIn" to="https://www.linkedin.com/">
          <div className="m-2">
            <FaLinkedin />
          </div>
        </Link>
        <Link id="YT" to="https://www.youtube.com/">
          <div className="m-2">
            <FaYoutube />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
