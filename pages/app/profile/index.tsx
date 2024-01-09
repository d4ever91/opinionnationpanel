
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import withAuth from '@/components/Route/WithAuth';
import { Seo } from '@/layouts/Seo';
import { IColumnType } from '@/components/App/Table/TableLayout';
import { Flex, Box, Link, useDisclosure, Grid, Heading, Text, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store/rootReducer';
import { removeUser } from '@/lib/action/user';
import PageHeader from '@/components/App/Header/PageHeader';
import SpinnerLayout from '@/components/Common/SpinnerLayout';
import { getCategoriesList } from '@/lib/action/category';
import { Survey } from '@/lib/constants/survey';
import { Icon } from '@iconify/react';
import { Category } from '@/lib/constants/category';

export const SurveyList: React.FC = () => {

  const dispatch = useDispatch();
  const { isLoading, categories } = useSelector((state: RootState) => state.category);

  useEffect(() => {
    getCategories();
  }, [])

  const getCategories = async () => {
    await dispatch<any>(getCategoriesList());
  }



  return (
    <Box>
      <Seo title="Profile" />
      <PageHeader title="Profile" />
      {isLoading ? <SpinnerLayout /> :
        <Grid
          templateColumns='repeat(3, 2fr)' gap={5}>
          {categories.map(category =>
            <Link key={category._id} href={`/app/profile/${category._id}/edit`}>
              <Box style={{border:"1px solid rgba(0, 0, 0, 0.18)"}}  display="flex" justifyContent="space-between" alignItems="center" bgColor="#fff" padding="4" borderRadius="8px">
                <Box display="flex" justifyContent="center" alignItems="center" >
                  <Box>
                    <Icon fontSize={30} icon={category.icon} />
                  </Box>
                  <Box ml="4">
                    <Heading as='h6' size='sm' >
                      {category.name}
                    </Heading>
                  </Box>
                </Box>
                <Box ml="4">
                  <CircularProgress value={category.profilePercantage} color='green.400'>
                    <CircularProgressLabel>{category.profilePercantage}%</CircularProgressLabel>
                  </CircularProgress>
                </Box>
              </Box>
            </Link>
          )}
        </Grid>
      }
    </Box>
  );
}

export default dynamic(() => Promise.resolve(withAuth(SurveyList)), { ssr: false });


