import { Route } from '../common'
import { ApiController } from '../controller/api.controller'

const apiRoutes: Route[] = [
  {
    method: 'get',
    route: `/ping`,
    controller: ApiController,
    action: 'ping',
  },
]

export default apiRoutes
