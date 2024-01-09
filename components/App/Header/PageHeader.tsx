import { Flex, Box, Spacer, Button, Heading } from '@chakra-ui/react';
import React from 'react';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';

interface PageHeaderProps {
    title: string;
    actionTitle?: string;
    actionLink?: string
}

export function PageHeader({ title, actionTitle, actionLink }: PageHeaderProps): JSX.Element {
    const router = useRouter();
    return (
        <Flex>
            <Box p='4' pl="0" display="flex" justifyContent="center" alignItems="center">
                <Heading size='md'>{title}</Heading>
            </Box>
            <Spacer />
            {actionTitle && actionLink && <Box p='4' pr="0" >
                <Button textTransform="none" leftIcon={<Icon icon="akar-icons:plus" />} type="button" onClick={() => router.push(actionLink)} colorScheme="blue" width="full" size="md" variant='solid'>
                    {actionTitle}
                </Button>
            </Box>}
        </Flex>
    );
}

export default PageHeader;
