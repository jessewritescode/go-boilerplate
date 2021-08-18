import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useThemeSlice } from './slice';
import { selectTheme } from './slice/selectors';

export const ThemeProvider = (props: { children: React.ReactChild }) => {
  useThemeSlice();

  const theme = useSelector(selectTheme);
  return (
    <ChakraProvider theme={theme}>
      {React.Children.only(props.children)}
    </ChakraProvider>
  );
};
