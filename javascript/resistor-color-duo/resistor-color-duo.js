const resistorColors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const decodedValue = (colors) => {
  return parseInt("" + resistorColors.indexOf(colors[0]) + resistorColors.indexOf(colors[1]));
};