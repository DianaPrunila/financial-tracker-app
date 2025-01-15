import Dropdown from "react-bootstrap/Dropdown";
import { FaSearch } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { LuWalletMinimal } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import "../App.css";

const NavBar = () => {
  return (
    <nav className="flex fixed justify-between flex-wrap w-full items-center top-0 px-4 py-3 z-10 bg-bkGd">
      <div className="nav-left flex">
        <form className="flex ml-4 border-x border-y rounded-l-md">
          <input
            type="text"
            placeholder="Search Here"
            className="p-2 px-5 text-base rounded-l-md focus:outline-none"
          />
        </form>
        <button className="bg-sidebarColor  text-white text-2xl p-2 rounded-r-md border-x border-y">
          <FaSearch />
        </button>
      </div>

      <div
        className="nav-right flex  text-2xl text-small"
        style={{ marginRight: "6rem" }}
      >
        <button className="sun m-2">
          <IoSunny />
        </button>

        <Dropdown className="notification-button p-0 " style={{ padding: "0" }}>
          <Dropdown.Toggle id="dropdown-basic ">
            <IoMdNotificationsOutline />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className=" profile-buttn rounded-full bg-sidebarColor text-white ">
          <Dropdown.Toggle
            id="dropdown-basic"
            className="rounded-full bg-sidebarColor text-white"
          >
            <CiUser />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              href="#/action-1"
              className="flex pb-0  pointer-events-none"
            >
              <div className="pic flex items-center mr-3">
                <CgProfile />
              </div>
              <div className="mr-3">
                <p className="name">Name</p>
                <p className="mail">hallo@email.com</p>
              </div>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              href="#/action-1"
              className="flex items-center py-0 hover:bg-sidebarColor hover:text-white"
            >
              <div className="mr-2">
                <CiUser />
              </div>
              Profile
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              href="#/action-1"
              className="flex items-center py-0 hover:bg-sidebarColor hover:text-white"
            >
              <div className="mr-2">
                <LuWalletMinimal />
              </div>
              Wallets
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              href="#/action-1"
              className="flex items-center py-0 hover:bg-sidebarColor hover:text-white"
            >
              <div className="mr-2">
                <IoSettingsOutline />
              </div>
              Settings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              href="#/action-1"
              className="flex items-center py-0 text-fallingPercentageColor hover:bg-sidebarColor hover:text-white rounded-b-md"
            >
              <div className="mr-2  rounded-full ">
                <IoLogOutOutline />
              </div>
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};

export default NavBar;
