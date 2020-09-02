export const mouse = (i, arr) => {
  if (i > 10 && i < 20) {
    return `${i} ${arr[2]}`;
  }
  if (i > 1 && i < 5) {
    return `${i} ${arr[1]}`;
  }
  if (i > 0 && i <= 1) {
    console.log(i);
    return `${i} ${arr[0]}`;
  }
  if (i === 0 || i === undefined) {
    return arr[0];
  }
  return `${i} ${arr[2]}`;
};
