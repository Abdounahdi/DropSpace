import { css } from "styled-components";
const sizes = {
  laptop: 1400,
  laptopMini: 1030,
  tablet: 880,
  tabletMini: 700,
  phone: 580,
};
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
