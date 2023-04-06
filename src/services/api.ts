import axios, { AxiosInstance } from 'axios'
import { IAxiosRequestConfig, IAxiosResponse } from './api.props'


/** Creates Axios instance and tracks request time in a metadata object added to the base request object. */
const createInstance = (baseURL: string ): any => {
    const instance = axios.create({
      baseURL,
      headers: {
        Accept: 'application/json'
      }
    })
  
    instance.interceptors.request.use(
      async (config: IAxiosRequestConfig): Promise<any> => {
        if (process.env.NODE_ENV === 'development') config.metadata = { startTime: new Date() }
       
          config.headers = {
            ...config?.headers, 
            'Content-Type': 'application/json'
          }
        
        return config
      },
      async (error) => {
        return await Promise.reject(error)
      }
    )

    instance.interceptors.response.use(
        (response: IAxiosResponse): any => {
          if (process.env.NODE_ENV === 'development') {
            response.config.metadata = {
              endTime: new Date()
            }
          }
          return response
        }, async error => {
            return await Promise.reject(error)
        }
    )
        return instance
    }

export const instance = createInstance('http://dev1.riza.network:8000/api/test1_userLogView/NO_SESSION/page=1') as AxiosInstance


 