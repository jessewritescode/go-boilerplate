/**
 *
 * Home
 *
 */
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Box, Heading, Text } from '@chakra-ui/react';
import { FullscreenBackground } from 'app/components/FullscreenBackground';
import { messages } from './messages';
import { useSessionSlice } from '../../../session/slice';
import { selectToken } from '../../../session/slice/selectors';

interface Props {}

export function Home(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  useSessionSlice();
  const token = useSelector(selectToken);

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
        <Heading as="h3">Your session token, sir:</Heading>
        <Text>{token}</Text>
      </Box>
    </FullscreenBackground>
  );
}
