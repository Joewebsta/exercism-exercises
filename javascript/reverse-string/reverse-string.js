export const reverseString = (str) => {
  const reverseStr = [];
  const strLength = str.length;
  const strLetters = str.split('');

  for (let i = strLength - 1; i >= 0; i--) {
    reverseStr.push(strLetters[i]);
  }

  return reverseStr.join('');
};