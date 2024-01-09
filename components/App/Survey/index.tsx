import { TableContainer, Table, Thead, Tr, Th, Tbody, Td,  Flex, Box, Spacer, Button,Text } from '@chakra-ui/react';
import React from 'react';
import { Icon } from '@iconify/react';

function DashboardCard07() {
  return (
    <>
      <Flex>
        <Box p='4'>
        <Text fontSize='lg'> Survey</Text>
        </Box>
        <Spacer />
        <Box p='4'>
          <Button leftIcon={<Icon icon="akar-icons:plus" />}  type="submit" colorScheme="blue"  width="full" size="sm" variant='solid'>
            Add Survey
          </Button>
        </Box>
      </Flex>
      <TableContainer>
        <Table size='lg'>
          <Thead>
            <Tr>
              <Th color="#101010" bgColor="#fafafa" borderTop="1px solid #f2f4f9">Status</Th>
              <Th color="#101010" bgColor="#fafafa" borderTop="1px solid #f2f4f9">Progress</Th>
              <Th color="#101010" bgColor="#fafafa" borderTop="1px solid #f2f4f9">CPI</Th>
              <Th color="#101010" bgColor="#fafafa" borderTop="1px solid #f2f4f9">LOI</Th>
              <Th color="#101010" bgColor="#fafafa" borderTop="1px solid #f2f4f9">Cost</Th>
              <Th color="#101010" bgColor="#fafafa" borderTop="1px solid #f2f4f9">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td borderTop="1px solid #f2f4f9">inches</Td>
              <Td borderTop="1px solid #f2f4f9">millimetres (mm)</Td>
              <Td borderTop="1px solid #f2f4f9" >25.4</Td>
              <Td borderTop="1px solid #f2f4f9" >25.4</Td>
              <Td borderTop="1px solid #f2f4f9" >25.4</Td>
              <Td borderTop="1px solid #f2f4f9" >25.4</Td>
            </Tr>
            <Tr>
              <Td borderTop="1px solid #f2f4f9">feet</Td>
              <Td borderTop="1px solid #f2f4f9">centimetres (cm)</Td>
              <Td borderTop="1px solid #f2f4f9" >30.48</Td>
              <Td borderTop="1px solid #f2f4f9" >25.4</Td>
              <Td borderTop="1px solid #f2f4f9" >25.4</Td>
              <Td borderTop="1px solid #f2f4f9" >25.4</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td >0.91444</Td>
              <Td borderTop="1px solid #f2f4f9" >25.4</Td>
              <Td borderTop="1px solid #f2f4f9" >25.4</Td>
              <Td borderTop="1px solid #f2f4f9" >25.4</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DashboardCard07;
