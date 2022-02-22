import { BaseErrorHandler } from './base-error-handler'

export interface AggregateOneInterface {
  allowReject?: boolean
}

export class BaseService<M extends any> extends BaseErrorHandler {
  protected readonly model: any

  constructor(model: any) {
    super()
    this.model = model
  }

  async create<T extends Record<string, any>>(modelDto: T): Promise<M> {
    return new this.model(modelDto).save()
  }

  async aggregateOne<T>(
    pipelines: any[],
    options?: AggregateOneInterface
  ): Promise<T> {
    const [result] = await this.model.aggregate(pipelines)

    if (options?.allowReject) {
      super.throwNotFound(result)
    }

    return result
  }
}
