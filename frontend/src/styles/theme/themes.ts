import { extendTheme } from '@chakra-ui/react';

const colors = {};

const styles = {
  global: {
    body: {
      h: '100%',
      w: '100%',
    },

    html: {
      h: '100%',
      w: '100%',
    },

    '#app': {
      minH: '100%',
      minW: '100%',
      p: 0,
      m: 0,
    },
  },
};

const lightTheme = extendTheme({ colors, styles });
const darkTheme = lightTheme;

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export default themes;
