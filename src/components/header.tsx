import SideMenu from "./side-menu";
import Logo from "./ui/logo";
// import NavMenu from "./ui/nav-menu";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 h-[80px] w-full fixed">
      <Logo />
      <SideMenu />
      {/* <NavMenu /> */}
    </header>
  );
};
export default Header;
