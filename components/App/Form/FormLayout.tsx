import { FormInputRender } from "@/components/App/Form/FormInputRender";

export interface FormInputType<T> {
  key: string;
  label: string;
  type: string;
  size?:string;
  validationType:string;
  rules?:any,
  options?:any;
  defaultValue?:any;
  value?:any;
  isClearable?:boolean
}

interface Props<T> {
  formInputs: FormInputType<T>[];
  submitAction: (values:T) => T;
  actionButtonLabel?:string;
  isLoading?:boolean
}

export function FormLayout<T>({ isLoading, formInputs,actionButtonLabel, submitAction }: Props<T>): JSX.Element {
  return (
    <FormInputRender isLoading={isLoading} actionButtonLabel={actionButtonLabel} formInputs={formInputs} submitAction={submitAction} />
  );
}