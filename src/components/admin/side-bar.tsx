import Fancy from "../ui/fancy";
import Logo from "../ui/logo";
import {
  ChartPie,
  FileText,
  Image,
  LogOut,
  Mail,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router";
import { cn } from "@/lib/utils";

const items = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <ChartPie className="size-5" />,
  },
  {
    name: "Posts",
    path: "posts",
    icon: <FileText className="size-5" />,
  },
  {
    name: "Media",
    path: "media",
    icon: <Image className="size-5" />,
  },
  {
    name: "Messages",
    path: "messages",
    icon: <Mail className="size-5" />,
  },
  {
    name: "Settings",
    path: "settings",
    icon: <Settings className="size-5" />,
  },
];

const Sidebar = () => {
  return (
    <aside className="w-12 md:w-[280px] px-1 py-2 md:p-3 flex flex-col gap-4 md:gap-5 justify-between items-stretch border-r">
      {/* Heading */}
      <div className="p-1 flex gap-3 items-center">
        <Logo />
        <h2 className="font-source-code font-bold text-xl hidden md:block">
          <Fancy>Amriad</Fancy>
        </h2>
      </div>
      {/* Navigation */}
      <ul className=" flex-1 space-y-2 md:space-y-3">
        {items.map(({ icon, name, path }) => (
          <li className="">
            <NavLink
              className={({ isActive }) =>
                cn(
                  "p-2.5 md:p-3 flex gap-4 rounded-md text-gray-400 hocus:text-gray-200",
                  isActive &&
                    "text-primary bg-gradient-to-r from-indigo-600/20 to-transparent"
                )
              }
              to={path}
            >
              {icon}
              <span className="hidden md:inline">{name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      {/* LOGOUT */}
      <div>
        <NavLink
          className="p-2.5 md:p-3 flex gap-4 rounded-md text-gray-400 hocus:text-gray-200"
          to="/logout"
        >
          <LogOut className="size-5" />
          <span className="hidden md:inline">Logout</span>
        </NavLink>
      </div>
    </aside>
  );
};
export default Sidebar;
