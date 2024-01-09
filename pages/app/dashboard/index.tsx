
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import withAuth from '@/components/Route/WithAuth';
import { Seo } from '@/layouts/Seo';
import { IColumnType, TableLayout } from '@/components/App/Table/TableLayout';
import { Flex, Box, Tabs, Text, Link, TabPanels, Tab, TabPanel, TabList, useDisclosure, Heading, Button, Grid } from '@chakra-ui/react';
import { User } from '@/lib/constants/user';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store/rootReducer';
import { removeUser } from '@/lib/action/user';
import PageHeader from '@/components/App/Header/PageHeader';
import { Icon } from '@iconify/react';
import SpinnerLayout from '@/components/Common/SpinnerLayout';
import { FormInputType } from '@/components/App/Form/FormLayout';
import DialogLayout from '@/components/Common/DialogLayout';
import { useRouter } from 'next/router';
import { getSurveys } from '@/lib/action/survey';
import { Survey, SurveyStatus } from '@/lib/constants/survey';
import Image from 'next/image';
import PageFooter from '@/components/App/Footer/Footer';

export const DashboardList: React.FC = () => {

  const router = useRouter()
  const [filters, setFilters] = useState<any>({});
  const dispatch = useDispatch();

  const { isLoading, surveys, users, statuses, countries, meta } = useSelector((state: RootState) => state.survey);

  const columns: IColumnType<Survey>[] = [
    {
      key: "status",
      title: "Status",
      width: 200,
      render: (_, { status }: any) => {
        return <Box display="flex">
          <Icon icon="ci:dot-04-l" color={SurveyStatus.find(surveystatus => surveystatus.value == status).color} fontSize={24} /><Text>{SurveyStatus.find(surveystatus => surveystatus.value == status).label}</Text>
        </Box>
      },
    },
    {
      key: "surveyName",
      title: "Survey Name",
      width: 200,
    },
    {
      key: "points",
      title: "Points",
      width: 200,
    },
    {
      key: "note",
      title: "Notes",
      width: 200,
    },
    {
      key: "_id",
      title: "Action",
      width: 200,
      render: (_, { _id, surveyStatus }: Survey) => {
        const { isOpen, onOpen, onClose } = useDisclosure();
        const onSubmit = async () => {
          await dispatch<any>(removeUser(_id));
        }
        return (
          <Flex key={_id}>
            <DialogLayout isOpen={isOpen} onClose={onClose} onSubmit={onSubmit} />
            {surveyStatus == 1 && <Link marginRight="3" aria-label='Edit' onClick={() => router.push(`/app/survey/${_id}/edit`)} ><Icon fontSize={24} icon="carbon:play-filled-alt" color="#cad6f3" /></Link>}
            {surveyStatus == 2 && <Link marginRight="3" aria-label='Edit' onClick={() => router.push(`/app/survey/${_id}/edit`)} ><Icon fontSize={24} icon="material-symbols:pause" color="#cad6f3" /></Link>}
            <Link marginRight="3" aria-label='Edit' onClick={onOpen}  ><Icon fontSize={24} icon="fa-regular:clone" color="#cad6f3" /></Link>
            <Link marginRight="3" aria-label='Delete' onClick={onOpen} ><Icon fontSize={24} icon="ion:stats-chart" color="#cad6f3" /></Link>
          </Flex>
        )
      },
    },
  ];

  return (
    <Box>
      <Seo title="Dashboard" />
      <PageHeader title="Dashboard" />
      {isLoading ? <SpinnerLayout /> :
        <Grid
          templateColumns='repeat(4, 1fr)' gap={5}>
          <Box style={{border:"1px solid rgba(0, 0, 0, 0.18)"}} display="flex" justifyContent="space-between" alignItems="center" bgColor="#fff" padding="4" borderRadius="8px">
            <Box display="flex" justifyContent="left" >
              <Box ml="4">
                <Heading as='h6' size='sm' mb="2" >
                  Available Surveys
                </Heading>
                <Text sx={{ color: "#74758F" }}>
                  0
                </Text>
              </Box>
            </Box>
          </Box>
          <Box style={{border:"1px solid rgba(0, 0, 0, 0.18)"}} display="flex" justifyContent="space-between" alignItems="center" bgColor="#fff" padding="4" borderRadius="8px">
            <Box display="flex" justifyContent="left" >
              <Box ml="4">
                <Heading as='h6' size='sm' mb="2" >
                  Surveys Taken
                </Heading>
                <Text sx={{ color: "#74758F" }}>
                  0
                </Text>
              </Box>
            </Box>
          </Box>
          <Box style={{border:"1px solid rgba(0, 0, 0, 0.18)"}} display="flex" justifyContent="space-between" alignItems="center" bgColor="#fff" padding="4" borderRadius="8px">
            <Box display="flex" justifyContent="left" >
              <Box ml="4">
                <Heading as='h6' size='sm' mb="2" >
                  Earned Points
                </Heading>
                <Text sx={{ color: "#74758F" }}>
                  200
                </Text>
              </Box>
            </Box>
          </Box>
          <Box style={{border:"1px solid rgba(0, 0, 0, 0.18)"}} display="flex" justifyContent="space-between" alignItems="center" bgColor="#fff" padding="4" borderRadius="8px">
            <Box display="flex" justifyContent="left" >
              <Box ml="4">
                <Heading as='h6' size='sm' mb="2">
                  Balance Points
                </Heading>
                <Text sx={{ color: "#74758F" }}>
                  100
                </Text>
              </Box>
            </Box>
          </Box>
        </Grid>
      }
      <PageHeader title="Available Surveys" />
      <TableLayout data={surveys} meta={meta} columns={columns} />
    </Box>
  );
}

export default dynamic(() => Promise.resolve(withAuth(DashboardList)), { ssr: false });


