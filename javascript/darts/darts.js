export const score = (x, y) => {
  const r = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

  if (r <= 1) { return 10 };
  if (r <= 5) { return 5 };
  if (r <= 10) { return 1 };
  return 0;
};