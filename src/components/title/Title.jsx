const Title = ({ title, className, bgColor, notCenter, font, style }) => (
  <h3
    className={`font-black ${font ? font : "text-2xl sm:text-4xl"} tracking-wide ${
      bgColor ? bgColor : "text-primary"
    } ${notCenter ? "" : "text-center"} font-greycliff ${className ? className : ""}`}
    style={style}
  >
    {title}
  </h3>
);

export default Title;
