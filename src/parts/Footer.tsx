import { Link } from "react-router-dom";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex w-full flex-wrap items-center justify-between bg-bkGd py-3 pl-16">
      <div id="copyright" className="ml-14 text-center">
        © Copyright 2025{" "}
        <a className="font-bold" href="/">
          Vanja{" "}
        </a>
        | All Rights Reserved
      </div>
      <div id="footer-icons" className="mr-10 flex items-center">
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
