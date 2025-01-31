import { Outlet } from "react-router-dom";

import Footer from "./parts/Footer";
import SideBar from "./parts/SideBar";
import NavBar from "./parts/NavBar";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="my-24 ml-20">
        <NavBar />
        <div className="ml-14">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
