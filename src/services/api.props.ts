import { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios'

export interface IAxiosRequestConfig extends AxiosRequestConfig {
  metadata?: {
    startTime?: Date
    endTime?: Date
  }
}

export interface IAxiosResponse extends AxiosResponse {
  config: IAxiosRequestConfig & {
    headers: AxiosRequestHeaders
  }
  duration?: number
}

export class ErrorResponse {
  constructor (
    public statusCode: number,
    public message: string,
    public code?: string,
    public shortMessage?: string,
    public nextAttemptInSeconds?: number,
    public remainingAttempts?: number
  ) {}
}
