/**
 *
 * Signup
 *
 */
import * as React from 'react';
import { FullscreenBackground } from 'app/components/FullscreenBackground';
import { Box } from '@chakra-ui/react';
import { SignupForm } from './components/SignupForm';

interface Props {}

export function Signup(props: Props) {
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
        <SignupForm />
      </Box>
    </FullscreenBackground>
  );
}
