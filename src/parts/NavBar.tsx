import { FaSearch } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav
      className="flex bg-bkGd fixed top-0 left-0 w-full items-center px-4 py-3 z-10"
      style={{ marginLeft: "5rem" }}
    >
      <div className="nav-left flex items-center space-x-0">
        <form className="flex">
          <input
            type="text"
            placeholder="Search Here"
            className="p-2 text-base border-2 border-sidebarColor rounded-md focus:outline-none"
          />
        </form>
        <button className="bg-sidebarColor text-white text-3xl p-2 rounded-md">
          <FaSearch />
        </button>
      </div>

      <div className="nav-right flex items-center space-x-4 ml-auto text-2xl text-small">
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
