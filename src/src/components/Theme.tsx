const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  blueLight: "#56BADC",
  bluePrimary: "#0E9DCD",
  blueDark: "#0A6E90",

  black: "#0B0B0B",
  white: "#F0F2F3",
};

const theme = {
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    title: {
      fontSize: 48,
      lineHeight: 48,
      fontFamily: "SFProDisplay-Bold",
      textAlign: "center",
    },
    subtitle: {
      fontSize: 36,
      fontFamily: "SFProDisplay-Semibold",
      textAlign: "center",
    },
    header: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProDisplay-Semibold",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProDisplay-Regular",
    },
    button: {
      fontSize: 18,
      fontFamily: "SFProDisplay-Medium",
    },
  },
};

export default theme;
