import { Outlet } from "react-router-dom";

import Footer from "./parts/Footer";
import SideBar from "./parts/SideBar";
import NavBar from "./parts/NavBar";

function App() {
  return (
    <div className="App flex">
      <SideBar />
      <div>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
