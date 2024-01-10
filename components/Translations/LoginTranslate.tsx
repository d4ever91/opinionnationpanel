import React from 'react';
import { LoginForm } from '@/components/Auth/Login/LoginForm';
import withOutAuth from '@/components/Route/WithoutAuth';
import { Flex, Stack, Text,Link } from '@chakra-ui/react';
import { Seo } from '@/layouts/Seo';
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';
export const LoginTranslate: React.FC = () => {

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
          <LoginForm />
          <Text style={{textAlign:'center'}} fontSize='md'>
          <Link style={{color: '#3A7EC6'}} onClick={()=>routeTo('/auth/forgot')}>
          {' '+t('login.forget')}
          </Link>
          </Text>
          <Text style={{textAlign:'center'}} fontSize='md'>{t('login.account')}
          <Link style={{color: '#3A7EC6'}} onClick={()=>routeTo('/auth/register')}>
          {' '+t('login.register')}
          </Link>
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
}

export default withOutAuth(LoginTranslate);


