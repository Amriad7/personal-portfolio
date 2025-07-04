import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GAinit } from "./lib/ga.ts";
import { createHashRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import Home from "./pages/home.tsx";
import About from "./pages/about.tsx";
import Services from "./pages/services.tsx";
import Contacts from "./pages/contacts.tsx";
import Projects from "./pages/projects.tsx";
import Admin from "./pages/admin/admin.tsx";
import Dashboard from "./pages/admin/dashboard.tsx";
import "./index.css";

const router = createHashRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "contacts", Component: Contacts },
      { path: "projects", Component: Projects },
    ],
  },
  {
    path: "admin",
    Component: Admin,
    children: [{ index: true, Component: Dashboard }],
  },
]);

GAinit();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
