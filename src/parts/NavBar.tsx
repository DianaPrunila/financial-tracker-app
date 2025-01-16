import Dropdown from "react-bootstrap/Dropdown";
import { FaSearch } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { LuWalletMinimal } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  return (
    <nav className="flex fixed justify-between flex-wrap w-full items-center top-0 px-4 py-3  bg-bkGd">
      <div className="nav-left flex">
        <form className="flex ml-4 border-x border-y rounded-l-md">
          <input
            type="text"
            placeholder="Search Here"
            className=" pl-5 pr-44 text-base rounded-l-md focus:outline-none"
          />
        </form>
        <button className="bg-sidebarColor  text-white text-xl p-2.5 rounded-r-md border-x border-y">
          <FaSearch />
        </button>
      </div>

      <div
        className="nav-right flex  text-center text-2xl text-small"
        style={{ marginRight: "6rem" }}
      >
        <button className="sun m-2">
          <IoSunny />
        </button>

        <Dropdown className="notification-button  ">
          <Dropdown.Toggle
            id="bell"
            className=" text-lg text-small border-0 bg-transparent p-0 shadow-none"
          >
            <IoMdNotificationsOutline />
          </Dropdown.Toggle>

          <Dropdown.Menu className="px-2 py-3">
            <div className="flex  flex-nowrap">
              <h4 className="mb-3 mx-3 text-big font-bold text-lg ">
                Recent Notification
              </h4>
            </div>
            <Dropdown.Item className="flex  py-0 mr-3">
              <div className="pic flex mr-2 items-center ">
                <CgProfile />
              </div>
              <div className="">
                <p className="notification  text-big font-bold">Name</p>
                <p className="time">yyyy-mm-dd hh:mm</p>
              </div>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="flex py-0">
              <div className="pic flex mr-2 items-center ">
                <CgProfile />
              </div>
              <div className="">
                <p className="notification  text-big font-bold">Name</p>
                <p className="time">yyyy-mm-dd hh:mm</p>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="  text-small ">
          <Dropdown.Toggle
            id="dropdown-basic"
            className=" rounded-full bg-sidebarColor text-small border-0 shadow-none hover:bg-sidebarColor hover:text-small focus:bg-sidebarColor focus:text-small active:bg-sidebarColor active:text-small"
          >
            <CiUser />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              href="#/action-1"
              className="flex pb-0  pointer-events-none"
            >
              <div className="pic flex mr-2 items-center ">
                <CgProfile />
              </div>
              <div className="">
                <p className="name">Name</p>
                <p className="mail">hallo@email.com</p>
              </div>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              href="#/action-1"
              className="flex items-center py-0 hover:bg-sidebarColor hover:text-small"
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
