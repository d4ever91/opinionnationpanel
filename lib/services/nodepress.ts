import  { useEffect } from 'react';
import axios, { AxiosInstance } from 'axios'
import { API_URL } from '@/lib/config/config'
import token from './token'
import { useToast } from '@/lib/hooks/useToast';
import { useRouter } from 'next/router';

enum HTTPCode {
  SUCCESS = 200,
  CREATE_SUCCESS = 201, // 创建成功
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401, // 未授权
  NO_PERMISSION = 403, // 无权限
  NOT_FOUND = 404,
  SERVER_ERROR = 500, // 服务器挂了
  GATEWAY_TIMEOUT = 504, // 请求超时
  UNKNOWN_ERROR = 0, // 未知
}

export enum HTTPStatus {
  Error = 'error',
  Success = 'success',
}

export interface RequestParams {
  [key: string]: string | number
}

export interface IResponse {
  status: number
  statusText?: string
  message?: string
  error?: any
}

export interface HTTPResult<T = any> {
  status: HTTPStatus.Success
  debug?: any
  error: string
  message: string
  result: T
}
console.log(API_URL)
const nodepress = axios.create({
  baseURL: '/api',
})

interface AxiosInterceptorProps {
  children: any,
  window?: () => Window;
}


const AxiosInterceptor = ({ children }: AxiosInterceptorProps) => {
  const { showToast } = useToast();
  const router = useRouter();
  useEffect(() => {
    nodepress.interceptors.response.use(
      (response) => {
        if (response.data.code === HTTPCode.SUCCESS) {
          if(response.data.redirect){
           router.push(response.data.redirect);
          }
          if(response.data.message) {
          showToast({
            status: 'success',
            title: 'Success!',
            description: response.data.message,
          })
        }
          return Promise.resolve(response.data)
        } else {
          return Promise.reject(response)
        }
      },
      (error) => {
        const errorJSON = error?.toJSON?.()
        const messageText: string = error.response?.data?.message || 'Error';
        const errorInfo = {
          ...errorJSON,
          config: error.config,
          request: error.request,
          response: error.response,
          code: error.code || error.response?.status || HTTPCode.BAD_REQUEST,
          message: messageText,
        }
        if(messageText)
        showToast({
          status: 'error',
          title: 'Error!',
          description: messageText,
        });
        if(error.response.status === HTTPCode.NOT_FOUND){
          router.push('/404');
        }
        if (error.response.status === HTTPCode.UNAUTHORIZED) {
          token.removeToken()
        }
        return Promise.reject(errorInfo)
      }
    )
  }, [])
  return children;
}

const service = {
  $: nodepress,
  request: <T = unknown>(...args: Parameters<AxiosInstance['request']>): Promise<HTTPResult<T>> =>
    nodepress.request(...args),
  get: <T = unknown>(...args: Parameters<AxiosInstance['get']>): Promise<HTTPResult<T>> =>
    nodepress.get(...args),
  delete: <T = unknown>(...args: Parameters<AxiosInstance['delete']>): Promise<HTTPResult<T>> =>
    nodepress.delete(...args),
  head: <T = unknown>(...args: Parameters<AxiosInstance['head']>): Promise<HTTPResult<T>> =>
    nodepress.head(...args),
  options: <T = unknown>(...args: Parameters<AxiosInstance['options']>): Promise<HTTPResult<T>> =>
    nodepress.options(...args),
  post: <T = unknown>(...args: Parameters<AxiosInstance['post']>): Promise<HTTPResult<T>> =>
    nodepress.post(...args),
  put: <T = unknown>(...args: Parameters<AxiosInstance['put']>): Promise<HTTPResult<T>> =>
    nodepress.put(...args),
  patch: <T = unknown>(...args: Parameters<AxiosInstance['patch']>): Promise<HTTPResult<T>> =>
    nodepress.patch(...args),
}

export default service

export { AxiosInterceptor }


