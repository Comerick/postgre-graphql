import { plainToInstance, ClassConstructor } from 'class-transformer'
import { validateOrReject, ValidationError } from 'class-validator'

import { ERROR_MESSAGE } from './error'
import { HttpException } from './exception'
import { HttpStatus } from './'

export async function validate<T extends Record<string, any>>(
  validationClass: ClassConstructor<T>,
  value: Record<string, any>
): Promise<T> {
  try {
    const instance = plainToInstance(validationClass, value, {}) || {}

    await validateOrReject(instance, { whitelist: true })

    return instance
  } catch (e:any) {
    if (e instanceof ValidationError || e?.[0] instanceof ValidationError) {
      throw new HttpException(
        HttpStatus.BAD_REQUEST,
        e,
        ERROR_MESSAGE.VALIDATION_ERROR
      )
    }

    throw new HttpException(HttpStatus.BAD_REQUEST, e)
  }
}
