

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

import { withThemeByDataAttribute } from '@storybook/addon-themes';
import "../src/index.css";
import "../src/variables.scss";


export const decorators =  [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-theme'
  }),
];


// import { withThemeByClassName } from "@storybook/addon-themes";

// // import "../src/tailwind.css";

// export const decorators = [
//   withThemeByClassName({
//     themes: {
//       light: "light",
//       dark: "dark",
//     },
//     defaultTheme: "light",
//   }),
// ];

export default preview;
