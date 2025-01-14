import { FaSearch } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className=" flex  bg-bkGd fixed w-full">
      <div className="nav-left flex">
        <form className="flex flex-col items-start">
          <input
            type="text"
            placeholder="Search Here"
            className=" p-2 text-base  border-2 border-sidebarColor rounded-md focus:outline-none  "
          />
        </form>
        <div className=" text-3xl text-white">
          <button className="bg-sidebarColor ">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="nav-right flex text-2xl text-small">
        <div className="sun">
          <IoSunny />
        </div>
        <div className="notification">
          <IoMdNotificationsOutline />
        </div>
        <div className="user-nav">
          <FaRegUserCircle />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
