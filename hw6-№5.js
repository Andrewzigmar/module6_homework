const pow = (x, n) => {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
};

pow(4,5);