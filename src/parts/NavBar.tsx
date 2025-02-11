import Dropdown from "react-bootstrap/Dropdown";
import { FaSearch } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { LuWalletMinimal } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <nav className="fixed top-0 z-20 flex w-full flex-wrap items-center justify-between bg-bkGd px-4 py-3">
      <div id="nav-left" className="flex">
        <form className="ml-4 flex rounded-l-md border-x border-y">
          <input
            type="text"
            placeholder="Search Here"
            className="rounded-l-md pl-5 pr-44 text-base focus:outline-none"
          />
        </form>
        <button className="rounded-r-md border-x border-y bg-sidebarColor p-2.5 text-xl text-white">
          <FaSearch />
        </button>
      </div>

      <div
        id="nav-right "
        className="flex text-center text-2xl"
        style={{ marginRight: "5.5rem" }}
      >
        <button id="sun" className="mx-2">
          <IoSunny />
        </button>

        <Dropdown id="notification-button">
          <Dropdown.Toggle
            id="bell"
            className="hover: m-2 mb-0 border-0 bg-transparent p-0 text-2xl shadow-none"
          >
            <IoMdNotificationsOutline />
          </Dropdown.Toggle>

          <Dropdown.Menu className="shadow-md">
            <div className="mt-3 flex">
              <h4 className="mx-3 mb-3 text-lg font-bold text-big">
                Recent Notification
              </h4>
            </div>
            <Dropdown.Item className="mr-3 flex py-0">
              <div className="pic mr-2 flex items-center">XXXX</div>
              <div className="">
                <p className="notification font-bold text-big">Name</p>
                <p className="time">yyyy-mm-dd hh:mm</p>
              </div>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="flex py-0">
              <div className="pic mr-2 flex items-center">XXXX</div>
              <div className="">
                <p className="notification font-bold text-big">Name</p>
                <p className="time">yyyy-mm-dd hh:mm</p>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            id="navBar-profile-icon "
            className="mx-2 rounded-full border-0 bg-sidebarColor p-2 text-2xl text-white shadow-none hover:bg-sidebarColor hover:text-white"
          >
            <CiUser />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              href="#/action-1"
              className="pointer-events-none flex pb-0"
            >
              <div className="pic mr-2 flex items-center">YYY</div>
              <div className="">
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
              className="flex items-center rounded-b-md py-0 text-fallingPercentageColor hover:bg-sidebarColor hover:text-white"
            >
              <div className="mr-2 rounded-full">
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
