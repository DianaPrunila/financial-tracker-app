import { Outlet } from "react-router-dom";

import Footer from "./parts/Footer";
import SideBar from "./parts/SideBar";
import NavBar from "./parts/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
