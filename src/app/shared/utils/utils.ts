export const debounce = (callback: Function, timeout = 500) => {
  let timer!: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, timeout);
  };
};
