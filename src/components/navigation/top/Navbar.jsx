import { FullLogo, HamburgerLogo } from "../../../assets/icons";
import RoundButton from "../../buttons/RoundButton";
import { topNavItems } from "../constants";

const Navbar = () => (
  <nav className="nav-wrapper flex justify-between p-6 py-3 bg-primary">
    <div className="nav-left flex justify-between items-center w-35 gap-3">
      <HamburgerLogo color="#fff" />
      <FullLogo color="#fff" />
    </div>
    <div className="nav-right font-black w-9/12 justify-end text-base text-white hidden sm:flex">
      {topNavItems.map(item => (
        <span className="p-2.5" key={item}>{item}</span>
      ))}
      <span className="ml-2.5">
        <RoundButton text="SIGN UP" />
      </span>
    </div>
  </nav>
);

export default Navbar;
