import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import { NavLink } from "react-router";

interface NavMenuProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  onItemClick?: () => void;
}

const NavMenu = ({ orientation, onItemClick, ...props }: NavMenuProps) => {
  const items = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contacts", path: "/contacts" },
  ];

  return (
    <nav {...props}>
      <ul
        className={cn(
          "flex items-center gap-5 text-lg font-light dark:text-gray-400 text-foreground/65",
          orientation === "vertical" && "flex-col gap-0 py-6"
        )}
      >
        {items.map(({ name, path }) => (
          <li key={name}>
            <NavLink
              to={path}
              onClick={onItemClick}
              className={({ isActive }) =>
                cn(
                  "p-3 inline-block dark:hocus:text-gray-200 hocus:text-foreground",
                  isActive && "font-semibold dark:text-gray-50 text-foreground"
                )
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
