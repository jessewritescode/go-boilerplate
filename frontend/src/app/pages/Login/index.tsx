import * as React from 'react';
import { FullscreenBackground } from 'app/components/FullscreenBackground';
import { Box } from '@chakra-ui/react';
import { LoginForm } from './components/LoginForm';

interface Props {}

export function Login(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <FullscreenBackground>
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
    </FullscreenBackground>
  );
}
