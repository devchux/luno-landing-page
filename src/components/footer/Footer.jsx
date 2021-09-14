import Select from "../select/Select";
import { FullLogo, Twitter, Youtube, LinkedIn } from "../../assets/icons";
import { about, resources, legal, products } from "./constants";

const Footer = () => (
  <div className="bg-gray-100 sm:flex justify-around p-14 sm:px-40 pb-20">
    <div className="sm:w-2/12 flex sm:block justify-center sm:justify-start pb-14 sm:pb-0">
      <FullLogo className="text-primary" />
    </div>
    <div className="hidden sm:flex justify-around sm:px-4 sm:w-8/12">
      <div className="sm:w-3/12">
        <div className="text-primary font-black font-greycliff">ABOUT</div>
        {about.map((item) => (
          <div className="text-primary pt-4">{item}</div>
        ))}
      </div>
      <div className="sm:w-3/12">
        <div className="text-primary font-black font-greycliff">RESOURCES</div>
        {resources.map((item) => (
          <div className="text-primary pt-4">{item}</div>
        ))}
      </div>
      <div className="sm:w-3/12">
        <div className="text-primary font-black font-greycliff">PRODUCTS</div>
        {products.map((item) => (
          <div className="text-primary pt-4">{item}</div>
        ))}
      </div>
      <div className="sm:w-3/12">
        <div className="text-primary font-black font-greycliff">LEGAL</div>
        {legal.map((item) => (
          <div className="text-primary pt-4">{item}</div>
        ))}
      </div>
    </div>
    <div className="sm:w-2/12">
      <Select />
      <div className="flex sm:hidden justify-between text-primary mt-10">
        <div>
          <ul>
            <li>About Luno</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Learning Portal</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Features</li>
            <li>Fees</li>
            <li>Exchange</li>
            <li>Business</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-6 py-10 justify-center sm:justify-start">
        <Twitter />
        <Youtube />
        <LinkedIn />
      </div>
      <div className="text-center sm:text-left">&copy; Copyright {new Date().getFullYear()}</div>
    </div>
  </div>
);

export default Footer;
