/**
 * @param fn function
 * @param ms milliseconds
 */
export function deny<T extends (...args: unknown[]) => void>(fn: T, ms: number) {
  let lastTime = 0;
  return function <C>(this: C, ...args: Parameters<T>) {
    const nowTime = Date.now();
    if (ms <= nowTime - lastTime) {
      lastTime = nowTime;
      fn.apply(this, args);
    }
  };
}
