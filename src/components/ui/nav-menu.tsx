import { cn } from "@/lib/utils";
import { NavLink } from "react-router";

const NavMenu = () => {
  const items = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contacts", path: "/contacts" },
  ];

  return (
    <nav className="hidden md:inline">
      <ul className="flex gap-5 text-lg font-light text-gray-400">
        {items.map(({ name, path }) => (
          <li key={name}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                cn("p-3 inline-block", isActive && "font-semibold text-gray-50")
              }
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavMenu;
