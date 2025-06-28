import SideMenu from "./side-menu";
import NavMenu from "./ui/nav-menu";
import Logo from "./ui/logo";
import ThemeSwitch from "./theme-switch";

const Header = () => {
  return (
    <header
      style={{ backdropFilter: "blur(12px)" }}
      className="bg-transparent z-50 flex items-center justify-between px-6 lg:px-24 lg:border-none h-[60px] sm:h-[80px] w-full fixed border-b border-gray-600/50"
    >
      <Logo />
      <NavMenu className="hidden md:inline" />
      <ThemeSwitch />
      <SideMenu />
    </header>
  );
};
export default Header;
