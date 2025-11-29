// Throttling
export function throttle(func, milliseconds) {
  let lastEventTimestamp = null;
  let limit = milliseconds;

  return (...args) => {
    let now = Date.now();

    if (!lastEventTimestamp || now - lastEventTimestamp >= limit) {
      lastEventTimestamp = now;
      func.apply(this, args);
    }
  };
}
