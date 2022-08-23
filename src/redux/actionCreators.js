export const increment = (x) => {
  return {
    type: "INCREMENT",
    payload: x,
  };
};

export const decrement = (x) => {
    return {
      type: "DECREMENT",
      payload: x,
    };
  };

  export const login = (x) => {
    return {
      type: "LOGIN",
      payload: x,
    };
  };