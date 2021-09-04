const RoundButton = ({ text, style }) => (
  <button
    className="p-3 px-6 bg-blue-500 rounded-full text-white font-black tracking-widest"
    style={style}
  >
    {text}
  </button>
);

export default RoundButton;
