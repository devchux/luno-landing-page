import { FullLogo, HamburgerLogo } from "../../../assets/icons";
import RoundButton from "../../buttons/RoundButton";
import { topNavItems } from "../constants";

const Navbar = () => (
  <nav className="nav-wrapper flex justify-between p-6 py-2 bg-primary">
    <div className="nav-left flex justify-between items-center w-35 gap-3">
      <HamburgerLogo color="#fff" />
      <FullLogo color="#fff" />
    </div>
    <div className="nav-right font-black w-9/12 justify-end items-center text-white flex tracking-widest">
      {topNavItems.map((item) => (
        <span className="mx-2.5 font-greycliff cursor-pointer hidden lg:inline" key={item}>
          {item}
        </span>
      ))}
      <span className="ml-2.5">
        <RoundButton text="SIGN UP" className="p-4 px-6" />
      </span>
    </div>
  </nav>
);

export default Navbar;
