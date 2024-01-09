import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { signIn } from 'next-auth/react';

export const SocialLogin: React.FC = () => {

    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const providerLogin = async (name:string) => {
        setIsLoading(true)
        await signIn(name)
        setIsLoading(false);
    }
    return (
        <Box>
            <Button textTransform="none" leftIcon={<Icon icon="gg:facebook" />} type="button" colorScheme="blue" width="full" size="lg" variant='solid'>
                Facebook
            </Button>
            <Button isLoading={isLoading} mt="4" onClick={()=>providerLogin('google')} textTransform="none" leftIcon={<Icon icon="mdi:google" />} type="button" colorScheme="blue" width="full" size="lg" variant='solid'>
                Google
            </Button>
            <Text mt="4" textAlign="center">Or</Text>
        </Box>
    );
}



