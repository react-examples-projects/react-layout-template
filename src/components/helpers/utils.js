import { breackpoints } from "../../config";

export const mediaQuery = (breackpoint) => {
  const px = (breackpoints[breackpoint] || 760) + "px";
  return (css) => `@media screen and (max-width: ${px}){
    ${css}
  }`;
};
