import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./parts/Footer";
import Navibar from "./parts/Navibar";

function App() {
  return (
    <div className="App">
      <Navibar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
