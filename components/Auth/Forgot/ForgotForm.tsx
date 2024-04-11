import { Form, Formik, FormikProps } from 'formik'
import * as yup from 'yup'
import React from 'react';
import { Auth } from '@/lib/constants/auth';
import { authForget } from '@/lib/action/auth';
import { Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react';
import { useToast } from '@/lib/hooks/useToast'
import { useTranslation } from 'next-i18next';

export const ForgotForm: React.FC = () => {

  const { t } = useTranslation();
  const [show, setShow] = React.useState<boolean>(false)
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const { showToast } = useToast()

  const submitForm = async (values: Auth,resetForm: any) => {
    setIsLoading(true)
    await authForget(values);
    resetForm();
    setIsLoading(false)
  }

  const SchemaLoginForm = yup.object().shape({
    email: yup.string().email().required('Email must be valid'),
  })

  return (
    <Formik
    onSubmit={(values, { resetForm }) => {
      submitForm(values, resetForm);
    }}
      validateOnBlur={false}
      validateOnChange={true}
      validationSchema={SchemaLoginForm}
      initialValues={{
        email: '',
      }}
    >
      {(formikProps: FormikProps<Auth>) => (
        <Form autoComplete="off" noValidate onSubmit={formikProps.handleSubmit}>
          <FormControl isInvalid={formikProps.errors.email && formikProps.touched.email}>
            <Input {...formikProps.getFieldProps('email')} type="email" placeholder={t('login.email')} size='lg' />
            <FormErrorMessage>{formikProps.errors.email}</FormErrorMessage>
          </FormControl>
          <Button isLoading={isLoading} color="white" type="submit" style={{ backgroundColor: '#3A7EC6' }} mt={4} width="full" size="lg" variant='solid'>
          {t('login.send')}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

