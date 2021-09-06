import { TrustTopCurveLogo, WellCurvedLogo } from "../../assets/icons";
import Title from "../title/Title";
import StoreButton from "../buttons/StoreButton";
import applePlay from "../../assets/icons/svg/store-apple.svg";
import googlePlay from "../../assets/icons/svg/store-google.svg";
import signUp from "../../assets/icons/svg/website_sign_up.svg";

const NeverLate = () => (
  <div>
    <TrustTopCurveLogo className="text-primary" />
    <div className="bg-primary p-20">
      <Title title="It’s never too late to get started" bgColor="text-white" />
      <p className="text-white text-center py-6" style={{ fontSize: "1.4rem" }}>
        Buy, store and learn about Bitcoin, Ethereum, XRP and Litecoin now
      </p>
      <div className="flex justify-around items-center w-5/12 m-auto">
        <StoreButton
          text={<img src={applePlay} alt="apple-play" className="w-full" />}
          style={{
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        />
        <StoreButton
          text={<img src={googlePlay} alt="google-play" className="w-full" />}
          style={{
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        />
        <StoreButton
          text={<img src={signUp} alt="apple-play" className="w-full" />}
          style={{
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        />
      </div>
    </div>
    <WellCurvedLogo className="text-primary" />
  </div>
);

export default NeverLate;
