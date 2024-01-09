import { FormInputType } from "@/components/App/Form/FormLayout";
import { FormControl, Input } from "@chakra-ui/react";
import Select from 'react-select';

interface Props<T> {
    formInput: FormInputType<T>;
    changeAction: (key:string ,value: any) => void;
}

export function FilterFormInput<T>({ formInput,changeAction }: Props<T>): JSX.Element {
    switch (formInput.type) {
        case "multiselect":
            return (
                <FormControl  ml={["0px !important", "24px !important", "24px !important"]} mb={["15px !important", "0px !important" ,"0px"]} width={["100%", "50%" ,"25%"]}>
                    <Select 
                        isMulti
                        onChange={(value) => {
                            changeAction(formInput.key,value)
                        }}
                        options={formInput.options}
                        placeholder={formInput.label}
                        closeMenuOnSelect={false}
                    />
                </FormControl>
            );
        case "textarea":
            return (
                <FormControl  mb={["15px !important", "0px !important" ,"0px"]} width={["100%", "50%" ,"25%"]}>
                    <Input   onChange={(e)=>changeAction(formInput.key,e.target.value)} type={formInput.type} placeholder={formInput.label} size={formInput.size} />
                </FormControl>
            );

        case "select":
            return (
                <FormControl  ml={["0px !important", "24px !important", "24px !important"]} mb={["15px !important", "0px !important" ,"0px"]} width={["100%", "50%" ,"25%"]}>
                    <Select
                        onChange={(value:any)=>changeAction(formInput.key,value)}
                        options={formInput.options}
                        placeholder={formInput.label}
                        closeMenuOnSelect={true}
                        isClearable={formInput.isClearable}
                    />
                </FormControl>
            );

        default:
            return (
                <FormControl mb={["15px !important", "0px !important" ,"0px"]}  width={["100%", "50%" ,"25%"]}>
                    <Input  onChange={(e)=>changeAction(formInput.key,e.target.value)}  type={formInput.type} placeholder={formInput.label} size={formInput.size} />
                </FormControl>
            )
    }
}