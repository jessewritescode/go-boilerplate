/**
 *
 * Home
 *
 */
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { messages } from './messages';
import { useSessionSlice } from '../Login/slice';
import { selectToken } from '../Login/slice/selectors';

interface Props {}

export function Home(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  useSessionSlice();
  const token = useSelector(selectToken);

  return (
    <Flex
      w="100%"
      h="100vh"
      direction="column"
      align="center"
      justify="center"
      bgGradient="linear(to-r, green.200, pink.500)"
    >
      <Box
        w="md"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bgColor="white"
        p={6}
      >
        <Heading as="h3">Your session token, sir:</Heading>
        <Text>{token}</Text>
      </Box>
    </Flex>
  );
}
