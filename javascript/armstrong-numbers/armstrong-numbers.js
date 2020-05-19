export const isArmstrongNumber = (num) => {
  const numArr = String(num).split('');
  
  const armstrongNum = numArr.reduce((sum, current) => {
    return sum + Number(current) ** numArr.length;
  }, 0)
  
  return (num === armstrongNum);
  };