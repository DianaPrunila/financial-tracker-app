import { Outlet } from "react-router-dom";

import Footer from "./parts/Footer";
import SideBar from "./parts/SideBar";
import NavBar from "./parts/NavBar";

function App() {
  return (
    <div className="App flex ">
      <SideBar />
      <div className="ml-20 my-24">
        <NavBar />
        <div className="ml-10">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
