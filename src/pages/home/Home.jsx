import Trust from "../../components/credibility/Trust";
import Faq from "../../components/faq/Faq";
import Feature from "../../components/features/Feature";
import GetStarted from "../../components/get-started/GetStarted";
import NeverLate from "../../components/get-started/NeverLate";
import HomeHeader from "../../components/header/HomeHeader";
import Referral from "../../components/referrals/Referral";
import Trade from "../../components/trade/Trade";

const Home = () => (
  <>
    <HomeHeader />
    <Feature />
    <Trust />
    <GetStarted />
    <Trade />
    <Referral />
    <Faq />
    <NeverLate />
  </>
);

export default Home;