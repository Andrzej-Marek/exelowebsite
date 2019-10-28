import { css } from "styled-components";

const sizes = {
  large: 2000,
  desktop: 1440,
  laptop: 1024,
  nav: 992,
  tablet: 768,
  phone: 425
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
