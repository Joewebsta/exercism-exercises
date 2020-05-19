const resistorColors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const decodedValue = ([color1, color2]) => {
  return (resistorColors.indexOf(color1) * 10) + resistorColors.indexOf(color2);
};