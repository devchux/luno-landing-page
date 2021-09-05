const RoundButton = ({ text, style, className }) => (
  <button
    className={`bg-blue-500 rounded-full text-white font-black tracking-widest font-greycliff ${className}`}
    style={style}
  >
    {text}
  </button>
);

export default RoundButton;
