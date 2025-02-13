import { Outlet } from "react-router-dom";

import Footer from "./parts/Footer";
import SideBar from "./parts/SideBar";
import NavBar from "./parts/NavBar";

function App() {
  return (
    <div id="all">
      {/* <div id="sidebar" className="z-50">
        <SideBar />
      </div> */}
      <div className="mb-20 mt-24">
        <div id="navbar" className="">
          <NavBar />
        </div>
        <div id="outlet" className="z-10 ml-11 mr-5">
          <Outlet />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
