

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
    html: {
      prettier: {
        tabWidth: 4,
        useTabs: false,
        htmlWhitespaceSensitivity: "strict",
        printWidth: 600,
        bracketLine: true,
        showLineNumbers: true, // default: false
        wrapLines: false, // default: true
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

export default preview;
