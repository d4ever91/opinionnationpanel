import { Flex, Box, Heading } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

export function PageFooter(): JSX.Element {
    return (
        <Flex  left="320px" position="fixed" bottom="0">
            <Box p='4' pl="0" display="flex" justifyContent="center" alignItems="center">
            <Heading as='h6' size='sm' mb="2">  <Link href="/privacy-policy">  Privacy Policy</Link></Heading>
            </Box>
            <Box p='4' pl="0" display="flex" justifyContent="center" alignItems="center">
            <Heading as='h6' size='sm' mb="2"><Link href="/term-of-use">Terms Of Use</Link></Heading>
            </Box>
        </Flex>
    );
}

export default PageFooter;
