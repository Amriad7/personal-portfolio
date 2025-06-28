import { Link } from "react-router";
import logo from "../../assets/logo.svg";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img className="size-8 md:size-12" src={logo} alt="Website logo" />
      </Link>
    </div>
  );
};
export default Logo;
