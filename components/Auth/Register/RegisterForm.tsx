import { Form, Formik, FormikProps } from 'formik'
import * as yup from 'yup'
import React from 'react';
import { Auth } from '@/lib/constants/auth';
import { authRegister } from '@/lib/action/auth';
import { RootState } from '@/lib/store/rootReducer';
import { useSelector } from 'react-redux';
import { FormControl,Checkbox, Input, FormErrorMessage, Button, Link } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

export const RegisterForm: React.FC = () => {

  const { t } = useTranslation();
  const { isLoading } = useSelector((state: RootState) => state.loading);
  const submitForm = async (values: Auth, resetForm: any) => {
    await authRegister(values);
    resetForm();
  }
  const SchemaLoginForm = yup.object().shape({
    firstName: yup.string().trim().required('First Name is required'),
    lastName: yup.string().trim().required('Last Name is required'),
    email: yup.string().email().required('Email must be valid'),
    terms: yup.boolean().required(''),
  })

  return (
    <Formik
      onSubmit={(values, { resetForm }) => {
        submitForm(values, resetForm);
      }}
      validateOnBlur={false}
      validateOnChange={true}
      enableReinitialize={true}
      validationSchema={SchemaLoginForm}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        terms:false,
        news:false
      }}
    >
      {(formikProps: FormikProps<Auth>) => (
        <Form onSubmit={formikProps.handleSubmit}>
          <FormControl isInvalid={formikProps.errors.firstName && formikProps.touched.firstName}>
            <Input {...formikProps.getFieldProps('firstName')} type="text" placeholder={t('register.firstName')} size='lg' />
            <FormErrorMessage>{formikProps.errors.firstName}</FormErrorMessage>
          </FormControl>
          <FormControl mt={4} isInvalid={formikProps.errors.lastName && formikProps.touched.lastName}>
            <Input {...formikProps.getFieldProps('lastName')} type="text" placeholder={t('register.lastName')} size='lg' />
            <FormErrorMessage>{formikProps.errors.lastName}</FormErrorMessage>
          </FormControl>
          <FormControl mt={4} isInvalid={formikProps.errors.email && formikProps.touched.email}>
            <Input {...formikProps.getFieldProps('email')} type="email" placeholder={t('register.emai')} size='lg' />
            <FormErrorMessage>{formikProps.errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl mt={4} isInvalid={formikProps.errors.company && formikProps.touched.company}>
            <Input {...formikProps.getFieldProps('company')} type="text" placeholder={t('register.company')+'(Optional)'} size='lg' />
            <FormErrorMessage>{formikProps.errors.company}</FormErrorMessage>
          </FormControl>
          <FormControl mt={4} isInvalid={formikProps.errors.terms && formikProps.touched.terms}>
            <Checkbox  name="terms" checked={formikProps.values.terms} onChange={formikProps.handleChange} size='md' >{t('register.policy1')} <Link style={{color: '#3A7EC6'}} href='/term-of-use'>{t('register.policy2')}</Link>{t('register.policy3')}<Link style={{color: '#3A7EC6'}} href='/privacy-policy'>{t('register.policy4')}</Link></Checkbox>
            <FormErrorMessage>{formikProps.errors.terms}</FormErrorMessage>
          </FormControl>
          <FormControl mt={4} isInvalid={formikProps.errors.news && formikProps.touched.news}>
            <Checkbox  name="news" checked={formikProps.values.news} onChange={formikProps.handleChange} size='md' >{t('register.news')}</Checkbox>
            <FormErrorMessage>{formikProps.errors.news}</FormErrorMessage>
          </FormControl>
          <Button isLoading={isLoading} isDisabled={ !formikProps.values.terms ||  !formikProps.values.news} color="white" type="submit" style={{backgroundColor: '#3A7EC6'}} mt={4} width="full" size="lg" variant='solid'>
          {t('register.createAccount')}
          </Button>
        </Form>
      )}
    </Formik>
  );
}