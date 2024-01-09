export interface ErrorAction {
  type: string,
  payload: {
      message: string
  }
}
export interface SuccessAction<T> {
  type: string,
  payload: T,
}

export interface SuccessActionObject {
  type: string,
  payload: {},
}

