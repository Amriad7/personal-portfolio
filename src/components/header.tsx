import Logo from "./ui/logo";
import NavMenu from "./ui/nav-menu";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-24 h-[80px] w-full fixed">
      <Logo />
      <NavMenu />
    </header>
  );
};
export default Header;
