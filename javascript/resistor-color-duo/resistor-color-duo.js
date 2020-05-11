const resistorColors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const decodedValue = (colors) => {
  const color1String = String(resistorColors.indexOf(colors[0]));
  const color2String = String(resistorColors.indexOf(colors[1]));
  return parseInt(color1String + color2String);
};