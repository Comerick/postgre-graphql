export class HttpException extends Error {
  public status: number
  public details: string | null
  public errors: Record<string, any> | null

  constructor(status: number, exception: unknown, message?: string) {
    super()

    this.status = status
    this.details = null

    const details: any = exception

    this.message = message || details?.message || this.message || details.name
    this.details =
      details.errors || details.details || details.message || details
  }
}
