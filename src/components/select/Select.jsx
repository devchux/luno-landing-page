import { useState } from "react";
import en from "../../assets/images/en.png";
import fr from "../../assets/images/fr.png";
import id from "../../assets/images/id.png";

const Select = ({ full }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="select w-full sm:w-48">
      <fieldset
        className="fieldset w-full p-3"
        tabIndex={0}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
      >
        <legend className="legend">Language</legend>
        <div className="flex justify-between items-center">
          <span className="w-10/12">
            <img
              src={en}
              alt="default language"
              width="40"
              className="inline pr-3"
            />
            English
          </span>
          <span className="select-arrow w-2/12"></span>
        </div>
      </fieldset>
      {show && (
        <div className="options">
          <div className="option">
            <img
              src={fr}
              alt="default language"
              width="40"
              className="inline pr-3"
            />
            Français
          </div>
          <div className="option">
            <img
              src={id}
              alt="default language"
              width="40"
              className="inline pr-3"
            />
            Indonesia
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
