import { Form, Formik, FormikProps } from 'formik'
import * as yup from 'yup'
import React from 'react';
import { Auth } from '@/lib/constants/auth';
import { signIn } from 'next-auth/react';
import { Button, FormControl, FormErrorMessage, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useToast } from '@/lib/hooks/useToast'
import { Icon } from '@iconify/react';
import { useTranslation } from 'next-i18next';

export const LoginForm: React.FC = () => {

  const { t } = useTranslation();
  const [show, setShow] = React.useState<boolean>(false)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const { showToast } = useToast()
  const handlePasswordClick = () => setShow(!show)

  const submitLogin = async (values: Auth) => {
    setIsLoading(true)
    var data = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
    })
    if (data.error) {
      setIsLoading(false)
      showToast({
        status: 'error',
        title: 'Error!',
        description: 'Invalid Credentials',
      })
    }
  }

  const SchemaLoginForm = yup.object().shape({
    email: yup.string().email().required('Email must be valid'),
    password: yup.string().min(7, 'Password must be more than 6 character').required(),
  })

  return (
    <Formik
      onSubmit={(values) => {
        submitLogin(values);
      }}
      validateOnBlur={false}
      validateOnChange={true}
      validationSchema={SchemaLoginForm}
      initialValues={{
        email: '',
        password: '',
      }}
    >
      {(formikProps: FormikProps<Auth>) => (
        <Form autoComplete="off" noValidate onSubmit={formikProps.handleSubmit}>
          <FormControl isInvalid={formikProps.errors.email && formikProps.touched.email}>
            <Input {...formikProps.getFieldProps('email')} type="email" placeholder={t('login.email')} size='lg' />
            <FormErrorMessage>{formikProps.errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formikProps.errors.password && formikProps.touched.password}>
            <InputGroup mt={4} size='md'>
              <Input {...formikProps.getFieldProps('password')} pr='4.5rem' type={show ? 'text' : 'password'}
                placeholder={t('login.password')} size='lg'
              />
              <InputRightElement width='4.5rem'>
                {show ? <Icon onClick={handlePasswordClick} icon="mdi:eye-off" fontSize={24} /> : <Icon onClick={handlePasswordClick} icon="ic:sharp-remove-red-eye" fontSize={24} />}
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{formikProps.errors.password}</FormErrorMessage>
          </FormControl>
          <Button isLoading={isLoading} color="white" type="submit" style={{ backgroundColor: '#3A7EC6' }} mt={4} width="full" size="lg" variant='solid'>
          {t('login.signin')}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

