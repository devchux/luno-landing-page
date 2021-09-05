import { HeaderCurveLogo } from "../../assets/icons";

const Header = ({ children }) => (
  <header className="bg-primary text-white">
    {children}
    <HeaderCurveLogo color="#fff" />
  </header>
);

export default Header;
