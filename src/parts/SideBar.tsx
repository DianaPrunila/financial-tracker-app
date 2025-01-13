import SidebarMenu from "react-bootstrap-sidebar-menu";
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
    <SidebarMenu>
      <SidebarMenu.Header>
        <SidebarMenu.Brand>{<FaShieldCat />}</SidebarMenu.Brand>
        <SidebarMenu.Toggle />
      </SidebarMenu.Header>
      <SidebarMenu.Body>
        <SidebarMenu.Nav>
          <SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Icon>{<LuRadar />}</SidebarMenu.Nav.Icon>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>
        <SidebarMenu.Nav>
          <SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Icon>{<LuWalletMinimal />}</SidebarMenu.Nav.Icon>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>
        <SidebarMenu.Nav>
          <SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Icon>{<BsCoin />}</SidebarMenu.Nav.Icon>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>
        <SidebarMenu.Nav>
          <SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Icon>{<TbTargetArrow />}</SidebarMenu.Nav.Icon>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>
        <SidebarMenu.Nav>
          <SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Icon>{<FaRegUser />}</SidebarMenu.Nav.Icon>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>
        <SidebarMenu.Nav>
          <SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Icon>{<GoGraph />}</SidebarMenu.Nav.Icon>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>
        <SidebarMenu.Nav>
          <SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Icon>{<MdSupportAgent />}</SidebarMenu.Nav.Icon>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>
      </SidebarMenu.Body>
    </SidebarMenu>
  );
};

export default SideBar;
