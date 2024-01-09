import { Form, Formik, FormikProps } from 'formik'
import * as yup from 'yup'
import React from 'react';
import {  Verification } from '@/lib/constants/auth';
import { Button, FormControl, FormErrorMessage, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByToken, updateUserPassword } from '@/lib/action/user';
import { RootState } from '@/lib/store/rootReducer';

export const VerificationForm=({ token }:any) => {

  const [show, setShow] = React.useState<boolean>(false)
  const handlePasswordClick = () => setShow(!show)
  const dispatch =useDispatch()

  const { isLoading,user } = useSelector((state: RootState) => state.user);

  const updateUser = async (values: Verification) => {
    if(user)  await dispatch<any>(updateUserPassword(user._id,values));
  }

  const SchemaLoginForm = yup.object().shape({
    password: yup.string().min(6, 'Password must be more than 6 character').required(),
    cpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required(),
  })

  useEffect(()=>{
    if(token)  getUser(token)
  },[token])

  const getUser=async (token)=>{
    await dispatch<any>(getUserByToken(token));
  }

  return (
    <Formik
      onSubmit={(values) => {
        updateUser(values);
      }}
      validateOnBlur={false}
      validateOnChange={true}
      validationSchema={SchemaLoginForm}
      initialValues={{
        password: '',
        cpassword: '',
      }}
    >
      {(formikProps: FormikProps<Verification>) => (
        <Form autoComplete="off" noValidate onSubmit={formikProps.handleSubmit}>
          <FormControl isInvalid={formikProps.errors.password && formikProps.touched.password}>
            <InputGroup mt={4} size='md'>
              <Input {...formikProps.getFieldProps('password')} pr='4.5rem' type={show ? 'text' : 'password'}
                placeholder='Enter password' size='lg'
              />
              <InputRightElement width='4.5rem'>
                {show ? <Icon onClick={handlePasswordClick} icon="mdi:eye-off" fontSize={24} /> : <Icon onClick={handlePasswordClick} icon="ic:sharp-remove-red-eye" fontSize={24} />}
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{formikProps.errors.password}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formikProps.errors.cpassword && formikProps.touched.cpassword}>
            <InputGroup mt={4} size='md'>
              <Input {...formikProps.getFieldProps('cpassword')} pr='4.5rem' type={show ? 'text' : 'password'}
                placeholder='Confirm password' size='lg'
              />
              <InputRightElement width='4.5rem'>
                {show ? <Icon onClick={handlePasswordClick} icon="mdi:eye-off" fontSize={24} /> : <Icon onClick={handlePasswordClick} icon="ic:sharp-remove-red-eye" fontSize={24} />}
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{formikProps.errors.cpassword}</FormErrorMessage>
          </FormControl>
          <Button isLoading={isLoading} color="white" type="submit" style={{ backgroundColor: '#F3BB45' }} mt={4} width="full" size="lg" variant='solid'>
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
}

