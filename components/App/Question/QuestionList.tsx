import { Grid, GridItem, Button } from '@chakra-ui/react';
import React from 'react';
import { Formik, FormikProps, Form, FieldArray } from 'formik';
import { QuestionInput } from './QuestionInput';
import { updateProfileQuestion } from '@/lib/action/profile';


export const QuestionList = ({ questions, category }) => {
  const submitAction = async (values) => {
    await  updateProfileQuestion(category,values)
  }
  
  const setFieldData = (questionId, values, push, remove, input) => {
    var value = values.findIndex(value => value.question == questionId);
    if(value !== -1) remove(value)
    push(input);
  }

  return (
    <Formik
      onSubmit={(values) => {
        submitAction(values);
      }}
      validateOnBlur={false}
      validateOnChange={true}
      initialValues={{
        data: []
      }}
    >
      {(formikProps: FormikProps<any>) => (
        <Form autoComplete="off" noValidate onSubmit={formikProps.handleSubmit}>
          <Grid
            templateColumns='repeat(1, 1fr)' gap={5}>
            {questions.map((question, index) =>
              <GridItem key={index} w='100%'>
                <FieldArray name="data" >
                  {({ push, remove }) => (
                    <QuestionInput setFieldData={setFieldData} push={push} remove={remove} category={category} formikProps={formikProps} question={question} />
                  )}
                </FieldArray>
              </GridItem>
            )}
          </Grid>
          <Button textTransform="none" type="submit" colorScheme="blue" mt={4} size="md" variant='solid'>
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default QuestionList;
