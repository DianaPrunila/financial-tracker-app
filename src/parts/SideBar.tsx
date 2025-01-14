import SidebarMenu from "react-bootstrap-sidebar-menu";
import "../App.css";
import { LuWalletMinimal } from "react-icons/lu";
import { FaShieldCat } from "react-icons/fa6";
import { LuRadar } from "react-icons/lu";
import { BsCoin } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";

const SideBar = () => {
  return (
    <div className=" bg-sidebarColor w-20 h-screen flex justify-center">
      <SidebarMenu className="">
        <SidebarMenu.Header className="mt-8">
          <SidebarMenu.Nav.Link href="/">
            <SidebarMenu.Brand className="text-4xl text-white ">
              {<FaShieldCat />}
            </SidebarMenu.Brand>{" "}
          </SidebarMenu.Nav.Link>
          <SidebarMenu.Toggle />
        </SidebarMenu.Header>
        <div className="flex ">
          <SidebarMenu.Body className=" ">
            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Link href="/">
                <SidebarMenu.Nav.Icon className="NavIcon">
                  {<LuRadar />}
                </SidebarMenu.Nav.Icon>
              </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Link href="Wallets">
                <SidebarMenu.Nav.Icon className="NavIcon">
                  {<LuWalletMinimal />}
                </SidebarMenu.Nav.Icon>
              </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Link href="Budgets">
                <SidebarMenu.Nav.Icon className="NavIcon">
                  {<BsCoin />}
                </SidebarMenu.Nav.Icon>
              </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Link href="Goals">
                <SidebarMenu.Nav.Icon className="NavIcon">
                  {<TbTargetArrow />}
                </SidebarMenu.Nav.Icon>
              </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Link href="Profile">
                <SidebarMenu.Nav.Icon className="NavIcon">
                  {<FaRegUser />}
                </SidebarMenu.Nav.Icon>
              </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Link href="Analytics">
                <SidebarMenu.Nav.Icon className="NavIcon">
                  {<GoGraph />}
                </SidebarMenu.Nav.Icon>
              </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Link href="Support">
                <SidebarMenu.Nav.Icon className="NavIcon">
                  {<MdSupportAgent />}
                </SidebarMenu.Nav.Icon>
              </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
          </SidebarMenu.Body>
        </div>
      </SidebarMenu>
    </div>
  );
};

export default SideBar;
