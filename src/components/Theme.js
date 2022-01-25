// Dark and light theme variables

export const lightTheme = {
  body: "#FCF6F4",
  text: "#000000",
  fontFamily: "'Source Sans Pro', sans-serif",
  bodyRgba: "252, 246, 244",
  textRgba: "0,0,0",
};

export const darkTheme = {
  body: "#000000",
  text: "#FCF6F4",
  fontFamily: "'Source Sans Pro', sans-serif",
  textRgba: "252, 246, 244",
  bodyRgba: "0,0,0",
};

export const breakpoints = {
  sm: 20, //em
  md: 30, // mobile
  lg: 40, //tab
  xl: 60, // tab
  xxl: 75,
  xxxl: 90, //desktop
  k: 160,
};

export const mediaQueries = (key) => {
  return (style) => `@media (max-width: ${key}em) { ${style} }`;
};
