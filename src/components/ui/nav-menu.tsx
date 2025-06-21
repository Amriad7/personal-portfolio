import { Link } from "react-router";

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
            <Link to={path} className="p-3 inline-block">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavMenu;
