export const validValue = (x) => Math.max(Math.min(x, 255), 0);

export const validValue2 = (x) => {
  if (x < 0) {
    return 0;
  } else if (x > 255) {
    return 255;
  } else {
    return x;
  }
};
