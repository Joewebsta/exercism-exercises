export const encode = (dataElems) => {
  if (dataElems === '') { return '' };

  const dataChars = [...dataElems];
  const encodeArr = [];
  let count = 1;
  
  dataChars.map((char, idx, arr) => {
    if ( char === arr[idx + 1] ) {
      count += 1;
    } else {
      if ( count === 1 ) {
        encodeArr.push(`${char}`);
      } else {
        encodeArr.push(`${count}${char}`);
        count = 1;
      } 
    }
  });
  return encodeArr.join('');
}

export const decode = () => {
  throw new Error("Remove this statement and implement this function");
};
