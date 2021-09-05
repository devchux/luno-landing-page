import { useState } from "react";
import RoundButton from "../buttons/RoundButton";
import FeatureCard from "../cards/FeatureCard";
import { cardItems, featureImageMap } from "./constants";

const Feature = () => {
  const [clicked, setClicked] = useState('Buy and sell with ease');
  return (
    <div className="p-6 py-16 features">
      <div className="title">
        <h3 className="font-black text-3xl tracking-wide text-primary text-center font-greycliff">
          App features
        </h3>
        <div className="sm:flex justify-between items-center contents">
          <div className="w-1/2 pt-20">
            <img src={featureImageMap[clicked]} alt='feature-img' className="w-10/12 float-right" />
          </div>
          <div style={{ width: "calc(50% - 40px)" }}>
            {cardItems.map(({ title, body }) => (
              <FeatureCard key={title} className={title === clicked && 'bg-gray-200'} title={title} body={body} onClick={() => setClicked(title)} />
            ))}
            <RoundButton text="BUY BITCOIN" className="w-10/12 mt-10 p-3 px-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
