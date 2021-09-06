const Title = ({ title, className, bgColor, notCenter, font }) => (
  <h3
    className={`font-black ${font ? font : "text-4xl"} tracking-wide ${
      bgColor ? bgColor : "text-primary"
    } ${notCenter ? "" : "text-center"} font-greycliff ${className}`}
  >
    {title}
  </h3>
);

export default Title;
