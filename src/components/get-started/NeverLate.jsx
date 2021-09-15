import { TrustTopCurveLogo, WellCurvedLogo } from "../../assets/icons";
import Title from "../title/Title";
import StoreButton from "../buttons/StoreButton";
import applePlay from "../../assets/icons/svg/store-apple.svg";
import googlePlay from "../../assets/icons/svg/store-google.svg";
import signUp from "../../assets/icons/svg/website_sign_up.svg";

const NeverLate = () => (
  <div>
    <TrustTopCurveLogo className="text-primary" />
    <div className="bg-primary py-24 lg:py-0 lg:p-24">
      <Title
        title="It’s never too late to get started"
        bgColor="text-white"
      />
      <p
        className="text-white text-center py-6"
        style={{ fontSize: "1.22rem" }}
      >
        Buy, store and learn about Bitcoin, Ethereum, XRP and Litecoin now
      </p>
      <div className="flex justify-around flex-col sm:flex-row gap-2 sm:gap-0 items-center lg:w-5/12 m-auto">
        <div className="flex justify-between gap-4 md:gap-40 lg:gap-4">
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
        </div>
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
