/**
 *
 * RouteNotFound
 *
 */
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { FullscreenBackground } from 'app/components/FullscreenBackground';
import { Box, Heading, Text } from '@chakra-ui/react';
import { translations } from 'locales/translations';

interface Props {}

export function RouteNotFound(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <FullscreenBackground>
      <Box w="md" borderWidth="1px" borderRadius="lg" bgColor="white" p={6}>
        <Heading>{t(translations.routeNotFound.title)}</Heading>
        <Text>{t(translations.routeNotFound.subtitle)}</Text>
      </Box>
    </FullscreenBackground>
  );
}
