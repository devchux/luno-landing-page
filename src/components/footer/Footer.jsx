import Select from "../select/Select";
import { FullLogo, Twitter, Youtube, LinkedIn } from "../../assets/icons";
import { about, resources, legal, products } from "./constants";

const Footer = () => (
  <div className="bg-gray-100 lg:flex justify-around p-14 lg:px-40 pb-20">
    <div className="lg:w-2/12 flex lg:block justify-center lg:justify-start pb-14 lg:pb-0">
      <FullLogo className="text-primary" />
    </div>
    <div className="hidden sm:block lg:flex justify-around lg:px-4 lg:w-8/12">
      <div className="lg:w-3/12 sm:flex sm:justify-between sm:w-11/12 lg:w-full lg:block sm:py-3 lg:py-0">
        <div className="text-primary font-black font-greycliff">ABOUT</div>
        <div className="w-6/12">
          {about.map((item) => (
            <div className="text-primary pt-4">{item}</div>
          ))}
        </div>
      </div>
      <div className="lg:w-3/12 sm:flex sm:justify-between sm:w-11/12 lg:w-full lg:block sm:py-3 lg:py-0">
        <div className="text-primary font-black font-greycliff">RESOURCES</div>
        <div className="w-6/12">
          {resources.map((item) => (
            <div className="text-primary pt-4">{item}</div>
          ))}
        </div>
      </div>
      <div className="lg:w-3/12 sm:flex sm:justify-between sm:w-11/12 lg:w-full lg:block sm:py-3 lg:py-0">
        <div className="text-primary font-black font-greycliff">PRODUCTS</div>
        <div className="w-6/12">
          {products.map((item) => (
            <div className="text-primary pt-4">{item}</div>
          ))}
        </div>
      </div>
      <div className="lg:w-3/12 sm:flex sm:justify-between sm:w-11/12 lg:w-full lg:block sm:py-3 lg:py-0">
        <div className="text-primary font-black font-greycliff">LEGAL</div>
        <div className="w-6/12">
          {legal.map((item) => (
            <div className="text-primary pt-4">{item}</div>
          ))}
        </div>
      </div>
    </div>
    <div className="lg:w-2/12">
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
      <div className="flex gap-6 py-10 justify-center lg:justify-start">
        <Twitter />
        <Youtube />
        <LinkedIn />
      </div>
      <div className="text-center lg:text-left">
        &copy; Copyright {new Date().getFullYear()}
      </div>
    </div>
  </div>
);

export default Footer;
