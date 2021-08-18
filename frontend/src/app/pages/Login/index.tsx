import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Box, Flex } from '@chakra-ui/react';
import { LoginForm } from './components/LoginForm';

interface Props {}

export function Login(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

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
        <LoginForm />
      </Box>
    </Flex>
  );
}
