import { TrustTopCurveLogo } from "../../assets/icons";
import Title from "../title/Title";
import rewards from "../../assets/images/rewards.png";
import RoundButton from "../buttons/RoundButton";

const Referral = () => (
  <div className="text-center">
    <TrustTopCurveLogo className="bg-gray-100 text-primary" />
    <div className="pt-10 bg-primary">
      <Title
        title="Earn free Bitcoin by inviting your friends!"
        bgColor="text-white"
        className="text-white"
      />
      <div className="sm:flex justify-around items-center p-10 px-64">
        <div className="sm:w-5/12">
          <img src={rewards} alt="rewards" className="w-10/12" />
        </div>
        <div className="sm:w-6/12 p-2">
          <p className="pt-10 pb-6 text-white text-left">
            Share your invite code with your friends, and when they sign up,
            deposit and buy NGN 500 in crypto you get NGN 25 in free Bitcoin as
            a reward!
          </p>
          <RoundButton text="CREATE ACCOUNT" className="p-3 w-full" />
        </div>
      </div>
    </div>
  </div>
);

export default Referral;
