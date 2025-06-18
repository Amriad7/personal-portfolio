import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import Home from "./pages/home.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{ index: true, Component: Home }],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App/>
    {/* <RouterProvider router={router} /> */}
  </StrictMode>
);
