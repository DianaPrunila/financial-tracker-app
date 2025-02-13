import Dropdown from "react-bootstrap/Dropdown";
import SidebarMenu from "react-bootstrap-sidebar-menu";
import { MDBTooltip } from "mdb-react-ui-kit";
import { LuWalletMinimal } from "react-icons/lu";
import { FaShieldCat } from "react-icons/fa6";
import { LuRadar } from "react-icons/lu";
import { BsCoin } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
import { TbAffiliateFilled } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";

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
function BasicExample() {
  return (
    <Dropdown className="">
      <Dropdown.Toggle
        id="dropdown-basic"
        className="px-3 py-[0.9rem] text-white"
      >
        <GiHamburgerMenu className="text" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="">
        {iconsSidebar.map((i) => (
          <Dropdown.Item
            key={i.id}
            href={i.address}
            className="flex pt-3 text-small hover:text-sidebarColor"
          >
            <div className="mr-2 text-2xl">
              {" "}
              <li>{i.sect}</li>
            </div>
            <div className="text-xl">
              <li>{i.title}</li>
            </div>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;
