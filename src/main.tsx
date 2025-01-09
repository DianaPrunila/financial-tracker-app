import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";
import Analytics from "./pages/Analytics.tsx";
import Budgets from "./pages/Budgets.tsx";
import Goals from "./pages/Goals.tsx";
import Support from "./pages/Support.tsx";
import Wallets from "./pages/Wallets.tsx";
import Profile from "./pages/Profile.tsx";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="/Analiytics" element={<Analytics />} />
      <Route path="/Budgets" element={<Budgets />} />
      <Route path="/Goals" element={<Goals />} />
      <Route path="/Support" element={<Support />} />
      <Route path="/Wallets" element={<Wallets />} />
      <Route path="/Profile" element={<Profile />} />

      <Route
        path="*"
        element={
          <div className="text-red-700 font-extrabold d-flex justify-center">
            404
          </div>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
