import React from 'react';
import { customTheme } from "@/lib/theme";
import withOutAuth from '@/components/Route/WithoutAuth';
import { ChakraProvider } from "@chakra-ui/react";
import { Flex, Stack, Text,Link } from '@chakra-ui/react';
import { Seo } from '@/layouts/Seo';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from 'next/router';
import { PasswordResetForm } from '@/components/Auth/Reset/PasswordResetForm';

export const PasswordReset: React.FC = () => {
    const router = useRouter();
    const { token } =router.query;
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Seo title="Verification" />
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
        <ChakraProvider theme={customTheme}>
          <PasswordResetForm token={token} />
          </ChakraProvider>
        </Stack>
      </Flex>
    </Stack>
  );
}

export default withOutAuth(PasswordReset);
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}


