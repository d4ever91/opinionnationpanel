import { Box, List, ListItem, Link, Select, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import React from 'react';

const TableNavigation = ({ pageNo, limit, total, changeAction }) => {
    var totalPages = Math.ceil(Number(total) / Number(limit));
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" >
            <Box mt="4">
                <Select onChange={(e) => changeAction('limit', e.target.value)} size="sm" defaultValue={limit}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                </Select>
            </Box>
            <Box mt="4">
                <List display="flex" justifyContent="right" >
                    <Link onClick={() => pageNo == 1 ? false : changeAction('pageNo', pageNo - 1)}>
                        <ListItem m="0" p="2" pt="2" pb="2" color="blue.500" opacity={pageNo == 1 ? 0.5 : 1} borderRadius="4" display="flex"  >
                            <Icon fontSize="23" icon="grommet-icons:form-previous" /><Text>Previous</Text>
                        </ListItem>
                    </Link>
                    <Link onClick={() => pageNo == totalPages ? false : changeAction('pageNo', pageNo + 1)}>
                        <ListItem m="0" p="2" pt="2" pb="2" color="blue.500" opacity={pageNo == totalPages ? 0.5 : 1} borderRadius="4" display="flex"  >
                            <Text>Next</Text><Icon fontSize="23" icon="grommet-icons:form-next" />
                        </ListItem>
                    </Link>
                </List>
            </Box>
        </Box>
    );
}

export default TableNavigation;

