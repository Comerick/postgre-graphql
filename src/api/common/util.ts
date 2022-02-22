export function isPromise(val: unknown): val is Promise<boolean> {
  return val instanceof Promise
}
