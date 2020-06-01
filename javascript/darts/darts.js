function isOnInner(x, y) {
  return (x ** 2) + (y ** 2) <= 1; 
}

function isOnMiddle(x, y) {
  return (x ** 2) + (y ** 2) > 1 && (x ** 2) + (y ** 2) <= 25;
}

function isOnOuter(x, y) {
  return (x ** 2) + (y ** 2) > 25 && (x ** 2) + (y ** 2) <= 100;
}

export const score = (x, y) => {
  x = Math.abs(x);
  y = Math.abs(y);

  if (isOnInner(x, y))  { return 10; }
  if (isOnMiddle(x, y)) { return 5; }
  if (isOnOuter(x, y))  { return 1; }

  return 0;  
};