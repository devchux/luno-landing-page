import { TrustBottomCurveLogo, TrustTopCurveLogo } from "../../assets/icons";
import { trustItems } from "./constants";

const Trust = () => (
  <div className="bg-primary text-white">
    <TrustTopCurveLogo className="bg-white text-primary" />
    <div className="sm:flex justify-between items-center p-24 py-8 font-black text-xl text-center">
      {trustItems.map(({ image, text }) => (
        <div key={text} className="w-4/12 p-8 flex flex-col items-center justify-start">
          <div>
            <img src={image} alt="trust-message" />
          </div>
          <div>
            <h5 className="font-greycliff">{text}</h5>
          </div>
        </div>
      ))}
    </div>
    <TrustBottomCurveLogo color="#fff" />
  </div>
);

export default Trust;
