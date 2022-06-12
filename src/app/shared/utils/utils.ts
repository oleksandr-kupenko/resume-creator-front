export const debounce = (fn: Function) => {
  let timeout: ReturnType<typeof setTimeout> | undefined = undefined;
  console.log('debounce');
  return function () {
    const saveResume = () => {
      fn.apply(arguments);
      fn();
    };

    clearTimeout(timeout);

    timeout = setTimeout(saveResume, 1500);
  };
};
