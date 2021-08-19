import * as React from 'react';
import { Flex } from '@chakra-ui/react';

interface Props {
  children: React.ReactElement;
}

export function FullscreenBackground(props: Props) {
  return (
    <Flex
      w="100%"
      h="100vh"
      direction="column"
      align="center"
      justify="center"
      bgGradient="linear(to-r, green.200, pink.500)"
    >
      {props.children}
    </Flex>
  );
}
