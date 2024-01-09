
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import withAuth from '@/components/Route/WithAuth';
import { Seo } from '@/layouts/Seo';
import { IColumnType, TableLayout } from '@/components/App/Table/TableLayout';
import { Flex, Box, Text, Link, useDisclosure, Tabs ,TabList ,Tab, TabPanels,TabPanel, Grid,Heading } from '@chakra-ui/react';
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

export const SupportList: React.FC = () => {

  const router = useRouter()
  const [filters, setFilters] = useState<any>({});
  const dispatch = useDispatch();

  const { isLoading, surveys, users, statuses, countries, meta } = useSelector((state: RootState) => state.survey);

  const formInputs: FormInputType<User>[] = [
    {
      key: "search",
      label: "Search...",
      type: "text",
      validationType: "string",
      size: "md"
    },
    {
      key: "user",
      label: "Project Manager",
      type: "select",
      validationType: "string",
      isClearable: true,
      options: users && users.map((option: any) => ({ ...option, label: option.email + '(' + option.count + ')', value: option._id })),
      size: "md"
    },
    {
      key: "country",
      label: "Country",
      type: "select",
      validationType: "string",
      isClearable: true,
      options: countries && countries.map((option: any) => ({ ...option, label: option.name + '(' + option.count + ')', value: option._id })),
      size: "md"
    },
    {
      key: "status",
      label: "Status",
      type: "select",
      isClearable: true,
      validationType: "string",
      options: statuses && statuses.map((option: any) => ({ ...option, label: option.label + '(' + option.count + ')', value: option.value })),
      size: "md"
    },
  ];


  const columns: IColumnType<Survey>[] = [
    {
      key: "status",
      title: "Date",
      width: 200,
      render: (_, { status }: any) => {
        return <Box display="flex">
          <Icon icon="ci:dot-04-l" color={SurveyStatus.find(surveystatus => surveystatus.value == status).color} fontSize={24} /><Text>{SurveyStatus.find(surveystatus => surveystatus.value == status).label}</Text>
        </Box>
      },
    },
    {
      key: "surveyCode",
      title: "Project",
      width: 200,
      render: (_, { _id, surveyCode }: any) => {
        return <Box>
          <Link onClick={() => router.push(`/app/survey/${_id}/edit`)} >{surveyCode}</Link>
        </Box>
      },
    },
    {
      key: "surveyName",
      title: "Description",
      width: 200,
    },
    {
      key: "progress",
      title: "Priority",
      headerAlign: 'center',
      rowAlign: 'center',
      width: 200,
      render: (_, { requiredCompletes, complete }: any) => {
        return <Box>
          <Text>{complete + '/' + requiredCompletes}</Text>
        </Box>
      },
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
      <Seo title="Support" />
      <PageHeader title="Support" />
      {isLoading ? <SpinnerLayout /> :
        <Grid
          templateColumns='repeat(2, 1fr)' gap={5}>
          <Box style={{ border: "1px solid rgba(0, 0, 0, 0.18)" }} display="flex" justifyContent="space-between" alignItems="center" bgColor="#fff" padding="4" borderRadius="8px">
            <Box display="flex" justifyContent="left" >
              <Box ml="4">
                <Heading as='h6' size='sm' mb="2" >
                  Open Tickets
                </Heading>
                <Text sx={{ color: "#74758F" }}>
                  200
                </Text>
              </Box>
            </Box>
          </Box>
          <Box style={{ border: "1px solid rgba(0, 0, 0, 0.18)" }} display="flex" justifyContent="space-between" alignItems="center" bgColor="#fff" padding="4" borderRadius="8px">
            <Box display="flex" justifyContent="left" >
              <Box ml="4">
                <Heading as='h6' size='sm' mb="2" >
                  Closed Tickets
                </Heading>
                <Text sx={{ color: "#74758F" }}>
                  0
                </Text>
              </Box>
            </Box>
          </Box>
        </Grid>
      }
      <Box sx={{ mt: 10 }} bgColor="white">
        <Tabs variant='enclosed'>
          <TabList>
            <Tab>Tickets Open</Tab>
            <Tab>Tickets Closed</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <TableLayout data={surveys} meta={meta} columns={columns} />
            </TabPanel>
            <TabPanel>
              <TableLayout data={surveys} meta={meta} columns={columns} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}

export default dynamic(() => Promise.resolve(withAuth(SupportList)), { ssr: false });


