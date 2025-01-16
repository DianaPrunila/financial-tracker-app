// import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";
import Analytics from "./pages/Analytics.tsx";
import Affiliates from "./pages/Affiliates.tsx";
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
      <Route path="/Affiliates" element={<Affiliates />} />

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
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
