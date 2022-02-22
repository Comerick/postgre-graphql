import { Application } from 'express'

import { handleRequest } from '../common'

import apiRoutes from './api'

const Routes = [...apiRoutes]

const base = '/api'

export function initializeRoutes(app: Application) {
  Routes.forEach((route) => {
    (app as any)[route.method](`${base}${route.route}`, handleRequest(route))
  })
}
