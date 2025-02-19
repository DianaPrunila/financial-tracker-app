import { FaCheck } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
// import { IoSunny } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { LuWalletMinimal } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <div
      id="navbar"
      className="navbar fixed top-0 z-10 bg-bkGd py-3 shadow-none"
      style={{ paddingLeft: "7.5rem" }}
    >
      <div id="navrar-left" className="flex-none gap-2">
        <div id="navbar-form" className="form-control border-0 p-0">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 sm:w-auto"
          />
        </div>
      </div>

      <div id="navbar-right" style={{ paddingRight: "2.1rem" }}>
        <div id="bell" className="dropdown dropdown-end mr-3">
          <div
            tabIndex={0}
            role="button"
            className="text-3xl shadow-none hover:bg-transparent"
          >
            <IoMdNotificationsOutline />
          </div>
          <div
            tabIndex={0}
            className="card dropdown-content card-compact z-[1] w-64 bg-white"
          >
            <div id="card-body" className="card-body pr-0">
              <div id="card-title">
                <h4>Recent Notification</h4>
              </div>
              <ul id="card-content" className="divide-y">
                <li className="flex content-between">
                  <div className="mr-5 h-fit rounded-full bg-riseingPercentageColor p-2">
                    <span className="h-fit text-2xl text-white">
                      <FaCheck />
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-big">
                      Account created successfully
                    </p>
                    <p id="time">2024/11/04 12:20</p>
                  </div>
                </li>
                <li className="flex content-between">
                  <div className="mr-5 h-fit rounded-full bg-fallingPercentageColor p-2">
                    <span className="h-fit text-2xl text-white">
                      <RxCross2 />
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-big">
                      2FA verificarion failed
                    </p>
                    <p id="time">2024/22/04/ 12:40</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="profile" className="dropdown dropdown-end">
          <div
            tabIndex={0}
            id="pic"
            role="button"
            className="avatar btn btn-circle"
          >
            <div id="navbar-avatar-pic" className="hover: w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            id="profile-drop"
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-white p-2 shadow"
          >
            <li className="">
              <a className="justify-start hover:bg-sidebarColor hover:text-white">
                <span>
                  <CiUser />
                </span>
                Profile
              </a>
            </li>
            <li>
              <a className="justify-start hover:bg-sidebarColor hover:text-white">
                <span>
                  <LuWalletMinimal />
                </span>
                Wallet
              </a>
            </li>
            <li>
              <a className="justify-start hover:bg-sidebarColor hover:text-white">
                <span>
                  <IoSettingsOutline />
                </span>
                Settings
              </a>
            </li>
            <li>
              <a className="justify-start text-fallingPercentageColor hover:bg-sidebarColor hover:text-white">
                <span>
                  <IoLogOutOutline />
                </span>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
