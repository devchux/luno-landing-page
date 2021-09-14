import { useState } from "react";
import RoundButton from "../buttons/RoundButton";
import FeatureCard from "../cards/FeatureCard";
import Title from "../title/Title";
import { cardItems, featureImageMap } from "./constants";

const Feature = () => {
  const [clicked, setClicked] = useState("Buy and sell with ease");
  return (
    <div className="p-0 sm:p-6 py-16 features">
      <Title title="App features" />
      <div className="flex justify-between items-center flex-col sm:flex-row contents">
        <div className="w-full sm:w-1/2 pt-20 hidden sm:flex justify-center sm:justify-end">
          <img
            src={featureImageMap[clicked]}
            alt="feature-img"
            className="w-10/12"
          />
        </div>
        <div className="cards pt-20 sm:pt-0">
          {cardItems.map(({ title, body }) => (
            <>
              <div className="w-full flex justify-center sm:hidden">
                <img
                  src={featureImageMap[title]}
                  alt="feature-img"
                  className="w-10/12"
                />
              </div>
              <FeatureCard
                key={title}
                className={title === clicked && "sm:bg-gray-200"}
                title={title}
                body={body}
                onClick={() => setClicked(title)}
              />
            </>
          ))}
          <RoundButton text="BUY BITCOIN" className="w-10/12 mt-10 p-3 px-6 feature-buy-button" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
