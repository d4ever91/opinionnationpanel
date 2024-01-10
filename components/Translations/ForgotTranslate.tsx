import React from 'react';
import withOutAuth from '@/components/Route/WithoutAuth';
import { Flex, Stack, Text,Link } from '@chakra-ui/react';
import { Seo } from '@/layouts/Seo';
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';
import { ForgotForm } from '../Auth/Forgot/ForgotForm';
export const ForgotTranslate: React.FC = () => {

  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation();
 
  const routeTo = (path) => {
    return router.push(path, path, { locale: locale });
  }
  
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Seo title="Login" />
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <ForgotForm />
        </Stack>
      </Flex>
    </Stack>
  );
}

export default withOutAuth(ForgotTranslate);


