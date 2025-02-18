import { Outlet } from "react-router-dom";

import Footer from "./parts/Footer";
import SideBar from "./parts/SideBar";
import NavBar from "./parts/NavBar";

function App() {
  return (
    <div id="all">
      <div id="sidebar">
        <SideBar />
      </div>
      <div>
        <div id="navbar">
          <NavBar />
        </div>
        <div
          id="outlet"
          className="z-10 mr-5 mt-24"
          style={{ marginLeft: "7.5rem" }}
        >
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
