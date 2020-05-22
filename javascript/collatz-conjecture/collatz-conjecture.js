export const steps = num => {
  if (num <= 0) {
    throw 'Only positive numbers are allowed';
  }

  let step = 0;
  while (num > 1) {
    step += 1;
    num % 2 === 0 ? (num /= 2) : (num = num * 3 + 1);
  }

  return step;
};