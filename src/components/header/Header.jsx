import { HeaderCurveLogo } from "../../assets/icons";
import threePhones from "../../assets/images/three-phones.png";
import RoundButton from "../buttons/RoundButton";
import StoreButton from "../buttons/StoreButton";
import applePlay from "../../assets/icons/svg/store-apple.svg";
import googlePlay from "../../assets/icons/svg/store-google.svg";

const Header = () => (
  <header className="bg-primary text-white">
    <div className="content-wrapper p-14 py-12 block sm:flex justify-between items-start">
      <div className="px-5">
        <img src={threePhones} alt="three-phones" className="w-11/12" />
      </div>
      <div className="py-6 px-36">
        <div className="text-wrapper tracking-wide">
          <h3 className="text-5xl font-black leading-none mb-7">
            Buy, save & manage your crypto in one place
          </h3>
          <ul className="list-inside header-ul">
            <li className="my-2">
              Access cryptocurrencies like BTC, ETH, XRP, BCH & LTC
            </li>
            <li className="my-2">
              Earn up to 4% interest p.a. in a <b>Bitcoin Savings Wallet</b>
            </li>
            <li className="my-2">
              Get started with as little as <b>₦500.00</b>
            </li>
            <li className="my-2">
              <b>Earn free Bitcoin</b> by inviting friends
            </li>
          </ul>
        </div>
        <div className="button-wrapper flex justify-between w-11/12 mt-10">
          <RoundButton text="CREATE ACCOUNT" />
          <StoreButton
            text={<img src={applePlay} alt="apple-play" className="w-full" />}
          />
          <StoreButton
            text={<img src={googlePlay} alt="google-play" className="w-full" />}
            style={{
              paddingTop: '0.6rem',
              paddingBottom: '0.6rem'
            }}
          />
        </div>
      </div>
    </div>
    <HeaderCurveLogo color="#fff" />
  </header>
);

export default Header;
