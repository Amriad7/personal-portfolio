import SideMenu from "./side-menu";
import Logo from "./ui/logo";
// import NavMenu from "./ui/nav-menu";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 h-[60px] w-full fixed border-b border-gray-600/20">
      <Logo />
      <SideMenu />
      {/* <NavMenu /> */}
    </header>
  );
};
export default Header;
