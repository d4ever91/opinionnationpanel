import { Spinner, Flex } from '@chakra-ui/react';
import React from 'react';

function SpinnerLayout() {
    return (
        <Flex flex="1" justifyContent="center" alignItems="center">
            <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
        </Flex>
    );
}

export default SpinnerLayout;


