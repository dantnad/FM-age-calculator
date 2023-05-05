const breakpoints = {
  desktop: "1024px",
  tablet: "768px",
  mobile: "767px",
};

const devices = {
  desktop: `(min-width: ${breakpoints.desktop})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  mobile: `(max-width: ${breakpoints.mobile})`,
};

export default devices;
