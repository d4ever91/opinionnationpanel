import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import withAuth from '@/components/Route/WithAuth';
import { Seo } from '@/layouts/Seo';
import { User } from '@/lib/constants/user';
import PageHeader from '@/components/App/Header/PageHeader';
import { FormInputType, FormLayout } from '@/components/App/Form/FormLayout';
import { Box } from '@chakra-ui/react';
import { RootState } from '@/lib/store/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import {  getUser, updateUser } from '@/lib/action/user';
import { useRouter } from 'next/router';
import SpinnerLayout from '@/components/Common/SpinnerLayout';

export const EditSurvey: React.FC = () => {
  
  const router = useRouter();
  const { id }:any = router.query
  const dispatch = useDispatch()
  const { modules } = useSelector((state: RootState) => state.module);
  const { isLoading ,user} = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if(id) getSingleUser(id);
  }, [id])

  const getSingleUser = async (id:string) =>{
    await dispatch<any>(getUser(id));
  }

  const formInputs: FormInputType<User>[] = [
    {
      key: "firstName",
      label: "First Name",
      type: "text",
      validationType: "string",
      defaultValue: user && user.firstName,
      rules: [
        {
          type: "required",
          params: ["First Name  is required"]
        },
      ],
      size: "md"
    },
    {
      key: "lastName",
      label: "Last Name",
      type: "text",
      validationType: "string",
      defaultValue:user && user.lastName,
      rules: [
        {
          type: "required",
          params: ["Last Name is required"]
        },
      ],
      size: "md"
    },
    {
      key: "email",
      label: "Email",
      type: "email",
      validationType: "string",
      defaultValue:user && user.email,
      rules: [
        {
          type: "required",
          params: ["Email is required"]
        },
        {
          type: "email",
          params: ["Invalid email"]
        },
      ],
      size: "md"
    },
    {
      key: "password",
      label: "Password",
      type: "text",
      validationType: "string",
      rules: [
        {
          type: "required",
          params: ["Password is required"]
        },
      ],
      size: "md"
    },
    {
      key: "module",
      label: "Permissions",
      type: "multiselect",
      validationType: "array",
      options: modules.map((option) => ({ ...option, value: option._id })),
      defaultValue:user &&  user.module && user.module.map((option:any) => ({ ...option, value: option._id })) || [],
      size: "md"
    },
  ];

  const submitAction = async (values) => {
    await dispatch<any>(updateUser(id,values));
  }

  return (
    <Box>
      <Seo title="Users" />
      <PageHeader title="Edit User" />
      {isLoading ? <SpinnerLayout/> : <FormLayout isLoading={isLoading} formInputs={formInputs} submitAction={submitAction} />}
    </Box>
  );
}

export default dynamic(() => Promise.resolve(withAuth(EditSurvey)), { ssr: false });


