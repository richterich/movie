const {setTimeout, clearTimeout} = window;

/**
 * @param fn function
 * @param ms milliseconds
 */
export function debounce<T extends (...args: unknown[]) => void>(fn: T, ms: number) {
  let timeoutID: number;
  return function <C>(this: C, ...args: Parameters<T>) {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      fn.apply(this, args);
    }, ms);
  };
}
