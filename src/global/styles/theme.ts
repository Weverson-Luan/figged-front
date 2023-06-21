/**
 * I am a color palette.
 */
const colors = {
  black_200: "#212121",
  blue_100: "#0F52BA",
  gray_200: "#CDCDCD",
  gray_350: "#D8D8D8",
  gray_400: "#B9C1CE",
  gray_450: "#9EA2A9",
  gray_500: "#666666",
  gray_700: "#818C89",
  gray_750: "#888888",
  gray_800: "#778192",
  gray_850: "#393939",
  green_100: "#32CD32",
  green_200: "#198754",
  green_350: "#5BC044",
  green_400: "#7cb342",
  natural: "#ffffff",
  natural_200: "#fcfcfc",
  purple_400: "#7840B0",
  red_300: "#EE5B5B",
  red_500: "#c62828",
  slate_500: "#25262D",
  slate_700: "#051C3B",
  slate_600: "#2F3A4A",
  yellow_400: "#c59017",
  yellow_500: "#EAC600",
  orange_100: "#FFA500",
};

/**
 * I am a fonts list.
 */
const fonts = {
  bold: 600,
  bolder: 700,
  medium: 500,
  normal: 400,
  primary: '"Poppins", Roboto, sans-serif',
};

const configs = {
  mobilePadding: "10px 20px",
};

/**
 * I am a application theme.
 */
const theme = {
  background: "#F6F6F6",
  gradient: `linear-gradient(to right, ${colors.yellow_400}, ${colors.yellow_500})`,
  fonts: { ...fonts },
  configs,
  primary: colors.slate_500,
  colors,
};

/**
 * EXPORTS
 */
export default theme;
