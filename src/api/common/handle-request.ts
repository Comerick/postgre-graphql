import { Request, Response } from 'express'

import { HttpStatus, HttpException, isPromise } from './'

export type RouteMethod = 'get' | 'post' | 'put' | 'delete' | 'patch'

export interface Route<T = any> {
  route: string
  controller: new () => T
  method: RouteMethod
  action: string
}

export const handleRequest =
  (route: Route) =>
  async (req: Request, res: Response, next: () => void): Promise<void> => {
    const promise = new route.controller()[route.action](req, res, next)

    if (promise && !isPromise(promise)) {
      res.json(promise)
      return
    }

    try {
      const result = await promise

      res.send(result)
    } catch (e: any) {
      const errorDetails = e

      const error = new HttpException(
        e.status || HttpStatus.BAD_REQUEST,
        errorDetails
      )

      res.status(error.status).json(error)
    }
  }
