import { FormInputType } from "@/components/App/Form/FormLayout";
import {  HStack } from "@chakra-ui/react";
import { FilterFormInput } from "./FilterFormInput";

interface Props<T> {
  formInputs: FormInputType<T>[];
  isLoading: boolean,
  changeAction: (key:string ,value: any)=>void;
}

export function FilterLayout<T>({ formInputs, changeAction }: Props<T>): JSX.Element {
  const initialValues = {};
  formInputs.forEach(item => {
    initialValues[item.key] = item.defaultValue || "";
  });

  return (
    <HStack spacing='24px'  mb="6" display={['inline','flex','flex']} justifyContent={['flex-end','flex-end','flex-end']}>
        {formInputs.map((formInput, index) =>
            <FilterFormInput key={index} formInput={formInput} changeAction={changeAction} />
        )}
    </HStack>
  );
}