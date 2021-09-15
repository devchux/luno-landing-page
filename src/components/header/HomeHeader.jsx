import RoundButton from "../buttons/RoundButton";
import StoreButton from "../buttons/StoreButton";
import Header from "./Header";
import threePhones from "../../assets/images/three-phones.png";
import applePlay from "../../assets/icons/svg/store-apple.svg";
import googlePlay from "../../assets/icons/svg/store-google.svg";

const HomeHeader = () => (
  <Header>
    <div className="content-wrapper p-14 sm:p-10 lg:pr-48 py-20 sm:py-9 block sm:flex justify-between items-start">
      <div className="px-12 pt-3 hidden lg:block">
        <img src={threePhones} alt="three-phones" className="w-10/12" />
      </div>
      <div className="md:py-6 md:px-20">
        <div className="text-wrapper tracking-wide tracking-tighter">
          <h1 className="text-title font-black leading-none mb-7 font-greycliff">
            Buy, save & manage your crypto in one place
          </h1>
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
        <div className="block sm:flex justify-between mt-9 button-wrapper">
          <RoundButton text="CREATE ACCOUNT" className="p-4 px-4" />
          <div className="flex justify-between gap-2 flex-col sm:flex-row py-10 sm:py-0 px-5 sm:px-0">
            <StoreButton
              text={<img src={applePlay} alt="apple-play" className="w-full" />}
            />
            <StoreButton
              text={
                <img src={googlePlay} alt="google-play" className="w-full" />
              }
              style={{
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </Header>
);

export default HomeHeader;
