import SideMenu from "./side-menu";
import NavMenu from "./ui/nav-menu";
import Logo from "./ui/logo";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 lg:px-24 lg:border-none h-[60px] sm:h-[80px] w-full fixed border-b border-gray-600/50">
      <Logo />
      <NavMenu className="hidden md:inline" />
      <SideMenu />
    </header>
  );
};
export default Header;
