import SidebarMenu from "react-bootstrap-sidebar-menu";
import { MDBTooltip } from "mdb-react-ui-kit";
import "../index.css";
import { LuWalletMinimal } from "react-icons/lu";
import { FaShieldCat } from "react-icons/fa6";
import { LuRadar } from "react-icons/lu";
import { BsCoin } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
import { TbAffiliateFilled } from "react-icons/tb";

const iconsSidebar = [
  {
    sect: <LuRadar />,
    title: "Home",
    address: "/",
  },
  {
    sect: <LuWalletMinimal />,
    title: "Wallets",
    address: "/Wallets",
  },
  {
    sect: <BsCoin />,
    title: "Budgets",
    address: "/Budgets",
  },
  {
    sect: <TbTargetArrow />,
    title: "Goals",
    address: "/Goals",
  },
  {
    sect: <FaRegUser />,
    title: "Profile",
    address: "/Profile",
  },
  {
    sect: <GoGraph />,
    title: "Analytics",
    address: "/Analytics",
  },
  {
    sect: <MdSupportAgent />,
    title: "Support",
    address: "/Support",
  },
  {
    sect: <TbAffiliateFilled />,
    title: "Affiliates",
    address: "/Affiliates",
  },
];
const SideBar = () => {
  return (
    <div className="fixed z-20 flex h-screen w-20 justify-center bg-sidebarColor">
      <SidebarMenu className="flex flex-col">
        <SidebarMenu.Header className="mb-3 mt-7">
          <SidebarMenu.Nav.Link href="/">
            <SidebarMenu.Brand className="text-4xl text-white">
              {<FaShieldCat />}
            </SidebarMenu.Brand>
          </SidebarMenu.Nav.Link>
          <SidebarMenu.Toggle />
        </SidebarMenu.Header>

        <div className="side-bar-icons-group mb-3 flex flex-grow flex-col justify-between">
          <SidebarMenu.Body className="flex flex-grow flex-col justify-between text-3xl text-small">
            {iconsSidebar.map((i) => (
              <SidebarMenu.Nav>
                <p className="mb-0">
                  <MDBTooltip tag="a" placement="right" title={i.title}>
                    <SidebarMenu.Nav.Link href={i.address}>
                      <SidebarMenu.Nav.Icon className="hover:text-white">
                        {i.sect}
                      </SidebarMenu.Nav.Icon>
                    </SidebarMenu.Nav.Link>
                  </MDBTooltip>
                </p>
              </SidebarMenu.Nav>
            ))}
          </SidebarMenu.Body>
        </div>
      </SidebarMenu>
    </div>
  );
};

export default SideBar;
