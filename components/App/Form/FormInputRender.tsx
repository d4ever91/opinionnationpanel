import { FormInput } from "@/components/App/Form/FormInput";
import { FormInputType } from "@/components/App/Form/FormLayout";
import { Button, Grid, GridItem } from "@chakra-ui/react";
import { Formik, Form, FormikProps, } from "formik";
import * as yup from 'yup'
import { createYupSchema } from "@/components/App/Form/FormValidation";

interface Props<T> {
  formInputs: FormInputType<T>[];
  submitAction: (values: T) => T;
  isLoading:boolean,
  actionButtonLabel:string
}

export function FormInputRender<T>({isLoading, formInputs,actionButtonLabel, submitAction }: Props<T>): JSX.Element {
  const initialValues = {};
  formInputs.forEach(item => {
    initialValues[item.key] = item.defaultValue || '';
  });
  const yepSchema = formInputs.reduce(createYupSchema, {});
  const validateSchema = yup.object().shape(yepSchema);

  return (
    <Formik
      onSubmit={(values:T) => {
        submitAction(values);
      }}
      validationSchema={validateSchema}
      validateOnBlur={false}
      validateOnChange={true}
      initialValues={initialValues}
    >
      {(formikProps: FormikProps<T>) => (
        <Form autoComplete="off" noValidate onSubmit={formikProps.handleSubmit}>
          <Grid
            templateColumns='repeat(3, 1fr)' gap={5}>
            {formInputs.map((formInput, index) =>
              <GridItem key={index} w='100%'>
                <FormInput formikProps={formikProps} formInput={formInput} />
              </GridItem>
            )}
          </Grid>
          <Button textTransform="none" isLoading={isLoading} type="submit" colorScheme="blue" mt={4}  size="md"  variant='solid'>
            {actionButtonLabel || 'Submit'}
          </Button>
        </Form>
      )}
    </Formik>
  );
}