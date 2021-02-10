const createControl = (config, validation) => {
  return {
    ...config,
    valid: !validation,
    touched: false,
    value: "",
  };
};

export { createControl };
