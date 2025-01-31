import SidebarMenu from "react-bootstrap-sidebar-menu";
import { MDBTooltip } from "mdb-react-ui-kit";
// import "../index.css";
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
  { id: 1, sect: <LuRadar />, title: "Home", address: "/" },
  { id: 2, sect: <LuWalletMinimal />, title: "Wallets", address: "/Wallets" },
  { id: 3, sect: <BsCoin />, title: "Budgets", address: "/Budgets" },
  { id: 4, sect: <TbTargetArrow />, title: "Goals", address: "/Goals" },
  { id: 5, sect: <FaRegUser />, title: "Profile", address: "/Profile" },
  { id: 6, sect: <GoGraph />, title: "Analytics", address: "/Analytics" },
  { id: 7, sect: <MdSupportAgent />, title: "Support", address: "/Support" },
  {
    id: 8,
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
          <SidebarMenu.Body className="flex flex-grow flex-col justify-between text-3xl  ">
            {iconsSidebar.map((i) => (
              <SidebarMenu.Nav key={i.id}>
                <p className="mb-0">
                  <MDBTooltip tag="a" placement="right" title={i.title}>
                    <SidebarMenu.Nav.Link href={i.address}>
                      <SidebarMenu.Nav.Icon className="flex text-3xl hover:text-white">
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
