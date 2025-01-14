import { MDBFooter } from "mdb-react-ui-kit";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <MDBFooter className="flex  justify-between w-max  bg-bkGd text-lg-start text-small ">
      <div className=" text-center p-4 ">
        © Copyright 2025
        <a className="text-reset fw-bold" href="/">
          Diana
        </a>
        I All Rights Reserved
      </div>
      <div className=" flex items-center text-small icons">
        <div className="fb">
          <FaFacebook />
        </div>
        <div className="twitter">
          <FaTwitter />
        </div>
        <div className="likedIn">
          <FaLinkedin />
        </div>
        <div className="YT">
          <FaYoutube />
        </div>
      </div>
    </MDBFooter>
  );
};

export default Footer;
