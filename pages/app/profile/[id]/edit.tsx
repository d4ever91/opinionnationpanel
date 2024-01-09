import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import withAuth from '@/components/Route/WithAuth';
import { Seo } from '@/layouts/Seo';
import PageHeader from '@/components/App/Header/PageHeader';
import { Box } from '@chakra-ui/react';
import { RootState } from '@/lib/store/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import SpinnerLayout from '@/components/Common/SpinnerLayout';
import { getQuestionList } from '@/lib/action/question';
import QuestionList from '@/components/App/Question/QuestionList';
import { getCategory } from '@/lib/action/category';

export const QuestionsList: React.FC = () => {

  const router = useRouter();
  const { id }: any = router.query
  const dispatch = useDispatch()
  const { isLoading, questions } = useSelector((state: RootState) => state.question);
  const { category } = useSelector((state: RootState) => state.category);

  useEffect(() => {
    if (id) {
      getQuestions(id);
      getSingleCategory(id);
    }
  }, [id])

  const getQuestions = async (id: string) => {
    await dispatch<any>(getQuestionList(id));
  }
  const getSingleCategory = async (id: string) => {
    await dispatch<any>(getCategory(id));
  }


  return (
    <Box>
      <Seo title={category.name} />
      <PageHeader title={category.name} />
      {isLoading ? <SpinnerLayout /> :
        <QuestionList questions={questions} category={category._id} />
      }
    </Box>
  );
}

export default dynamic(() => Promise.resolve(withAuth(QuestionsList)), { ssr: false });


