import { FormInputType } from "@/components/App/Form/FormLayout";
import { FormControl, Input, FormErrorMessage } from "@chakra-ui/react";
import Select from 'react-select';
import { FormikProps } from "formik";

interface Props<T> {
    formInput: FormInputType<T>;
    formikProps: FormikProps<T>
}

export function FormInput<T>({ formInput, formikProps }: Props<T>): JSX.Element {
    switch (formInput.type) {
        case "multiselect":
            return (
                <FormControl isInvalid={formikProps.errors[formInput.key] && formikProps.touched[formInput.key]}>
                    <Select
                        isMulti
                        {...formikProps.getFieldProps(formInput.key)}
                        onChange={(value) => {
                            formikProps.setFieldValue(formInput.key, value);
                        }}
                        options={formInput.options}
                        placeholder={formInput.label}
                        closeMenuOnSelect={true}
                    />
                    <FormErrorMessage>{formikProps.errors[formInput.key]}</FormErrorMessage>
                </FormControl>
            );
        case "textarea":
            return (
                <FormControl isInvalid={formikProps.errors[formInput.key] && formikProps.touched[formInput.key]}>
                    <Input {...formikProps.getFieldProps(formInput.key)} type={formInput.type} placeholder={formInput.label} size={formInput.size} />
                    <FormErrorMessage>{formikProps.errors[formInput.key]}</FormErrorMessage>
                </FormControl>
            );

        case "select":
            return (
                <FormControl isInvalid={formikProps.errors[formInput.key] && formikProps.touched[formInput.key]}>
                    <Select
                        {...formikProps.getFieldProps(formInput.key)}
                        onChange={(value) => {
                            formikProps.setFieldValue(formInput.key, value);
                        }}
                        options={formInput.options}
                        placeholder={formInput.label}
                        isClearable={formInput.isClearable}
                        closeMenuOnSelect={true}
                    />
                    <FormErrorMessage>{formikProps.errors[formInput.key]}</FormErrorMessage>
                </FormControl>
            );

        default:
            return (
                <FormControl isInvalid={formikProps.errors[formInput.key] && formikProps.touched[formInput.key]}>
                    <Input {...formikProps.getFieldProps(formInput.key)} type={formInput.type} placeholder={formInput.label} size={formInput.size} />
                    <FormErrorMessage>{formikProps.errors[formInput.key]}</FormErrorMessage>
                </FormControl>
            )
    }
}