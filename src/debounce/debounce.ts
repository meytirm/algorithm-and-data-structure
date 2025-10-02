export function debounce(fn: (...args: any[]) => void, delay: number) {
  let timeout: NodeJS.Timeout | null = null
  return(...args: any[]) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}