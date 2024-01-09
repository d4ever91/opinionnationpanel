
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

export const QuestionList: React.FC = () => {

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
    </Box>
  );
}

export default dynamic(() => Promise.resolve(withAuth(QuestionList)), { ssr: false });


