export function throttle(fn: (...args: any[]) => void, ms: number = 0) {
  let lastCall = 0

  return (...args: any[]) => {
    const now = Date.now()
    if ((now - lastCall) > ms) {
      fn(...args)
      lastCall = now
    }
  }
}
