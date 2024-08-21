export default function debounce(func, wait) {
  let timeout
  return function (...args) {
    const ctx = this
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(ctx, ...args)
    }, wait)
  }
}
