import React from 'react';
import withOutAuth from '@/components/Route/WithoutAuth';
import { Flex, Stack, Text,Link } from '@chakra-ui/react';
import { Seo } from '@/layouts/Seo';
import { useRouter } from 'next/router';
import { VerificationForm } from '@/components/Auth/Verification/VerificationForm';

export const Verification: React.FC = () => {
    const router = useRouter();
    const { token } =router.query;
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Seo title="Verification" />
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <VerificationForm token={token} />
        </Stack>
      </Flex>
    </Stack>
  );
}

export default withOutAuth(Verification);


