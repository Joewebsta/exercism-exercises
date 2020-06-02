// export const gigasecond = (date) => {
//   const newDate = date.setSeconds(date.getSeconds() + 1e9);
//   return new Date(newDate);
// };

// export const gigasecond = (date) => {
//   let time = date.setSeconds(date.getSeconds() + 1000000000);
//   return new Date(time);
// };

export const gigasecond = (date) => {
  return new Date(date.getTime() + 1e12);
};