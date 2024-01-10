import React from 'react';
import withOutAuth from '@/components/Route/WithoutAuth';
import {  Flex,  Link,  Stack ,Text} from '@chakra-ui/react';
import { Seo } from '@/layouts/Seo';
import { RegisterForm } from '@/components/Auth/Register/RegisterForm';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export const RegisterTranslate: React.FC = () => {
  const { t } = useTranslation();

  const router = useRouter();
  const { locale } = router;
  const routeTo = (path) => {
    return router.push(path, path, { locale: locale });
 }
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Seo title="Register"/>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <RegisterForm />
          <Text style={{textAlign:'center'}} fontSize='md'>  {t('register.already')+' ?'}
          <Link style={{color: '#3A7EC6'}} onClick={()=>routeTo('/auth/login')}>
          {' '+t('register.login')}
          </Link>
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
}

export default withOutAuth(RegisterTranslate);


