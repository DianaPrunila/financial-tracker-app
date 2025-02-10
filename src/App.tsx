import { Outlet } from "react-router-dom";

import Footer from "./parts/Footer";
import SideBar from "./parts/SideBar";
import NavBar from "./parts/NavBar";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="mb-20 ml-20 mt-24">
        <NavBar />
        <div className="ml-14 mr-7">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
