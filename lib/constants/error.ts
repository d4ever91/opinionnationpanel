export interface ErrorPayload {
  error?:string,
  loading?:boolean,
}

export const errorActionTypes = {
  REQUEST_FAILURE: 'REQUEST_FAILURE',
}
