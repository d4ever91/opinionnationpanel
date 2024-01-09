import { QuestionOption } from "@/lib/constants/question";
import { FormControl, Input, FormErrorMessage, FormLabel, Checkbox, Flex } from "@chakra-ui/react";
import Select from 'react-select';

export function QuestionInput({ category, question, formikProps, push, remove, setFieldData }): JSX.Element {
    switch (question.questionType) {
        case 1:
            return (
                <FormControl isInvalid={formikProps.errors[question._id] && formikProps.touched[question._id]}>
                    <FormLabel style={{ fontWeight: 'bold' }} mb="4" className="select">{question.questionName}</FormLabel>
                    <Select
                        isMulti
                        {...formikProps.getFieldProps(question._id)}
                        onChange={(value) => {
                            setFieldData(question._id, formikProps.values.data, push, remove, { question: question._id, category, options: value });
                        }}
                        options={question.options}
                        placeholder={question.label}
                        closeMenuOnSelect={true}
                    />
                    <FormErrorMessage>{formikProps.errors[question._id]}</FormErrorMessage>
                </FormControl>
            );
        case 2:
            return (
                <FormControl isInvalid={formikProps.errors[question._id] && formikProps.touched[question._id]}>
                    <FormLabel style={{ fontWeight: 'bold' }} mb="4" className="select">{question.questionName}</FormLabel>
                    <Input {...formikProps.getFieldProps(question._id)} type={question.type} placeholder={question.label} size={question.size} />
                    <FormErrorMessage>{formikProps.errors[question._id]}</FormErrorMessage>
                </FormControl>
            );

        case 3:
            return (
                <FormControl isInvalid={formikProps.errors[question._id] && formikProps.touched[question._id]}>
                    <FormLabel style={{ fontWeight: 'bold' }} mb="4" className="select">{question.questionName}</FormLabel>
                    <Select
                        {...formikProps.getFieldProps(question._id)}
                        onChange={(value:any) => {
                            setFieldData(question._id, formikProps.values.data,  push, remove, { question: question._id, category, options: value.optionId });
                        }}
                        options={question.questionOption && question.questionOption.map((option: QuestionOption) => ({ ...option, label: option.title, value: option.optionId }))}
                        isClearable={question.isClearable}
                        closeMenuOnSelect={true}
                    />
                    <FormErrorMessage>{formikProps.errors[question.key]}</FormErrorMessage>
                </FormControl>
            );

        case 4:
            return (
                <FormControl isInvalid={formikProps.errors[question._id] && formikProps.touched[question._id]}>
                    <FormLabel style={{ fontWeight: 'bold' }} mb="4" className="checkbox">{question.questionName}</FormLabel>
                    {question.questionOption.map(option =>
                        <Flex key={option.optionId} mb="2">
                            <Checkbox value={option.optionId} onChange={(e) => {
                                setFieldData(question._id,formikProps.values.data, push, remove, { question: question._id, category, options: e.target.value });
                            }}>
                                {option.title}
                            </Checkbox>
                        </Flex>
                    )}
                    <FormErrorMessage>{formikProps.errors[question._id]}</FormErrorMessage>
                </FormControl>
            );

        default:
            return (
                <FormControl isInvalid={formikProps.errors[question._id] && formikProps.touched[question._id]}>
                    <FormLabel style={{ fontWeight: 'bold' }} mb="4" className="checkbox">{question.questionName}</FormLabel>
                    <Input {...formikProps.getFieldProps(question._id)} type={question.type} placeholder={question.label} size={question.size} />
                    <FormErrorMessage>{formikProps.errors[question._id]}</FormErrorMessage>
                </FormControl>
            )
    }
}