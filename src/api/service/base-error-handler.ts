import { HttpException, HttpStatus } from '../common'

export class BaseErrorHandler {
  throwNotFound(entity: unknown, msg = ''): void {
    if (!entity) {
      throw new HttpException(HttpStatus.NOT_FOUND, msg)
    }
  }
}
