export const translate = (rnaString = '') => {
  const proteinArr = [];
  const rnaStringLength = rnaString.length; 
  const totNumCodons = rnaStringLength / 3;
  
  if (rnaString.length === 0) { return proteinArr }
  if (rnaStringLength % 3 !== 0) { throw 'Invalid codon' };

  for (let i = 0; i < totNumCodons; i++) {
    const index = 3 * i;
    const codon = rnaString.slice(index, index + 3);

    if (codon === 'UAA' || codon === 'UAG' || codon === 'UGA') { return proteinArr };

    const proteinName = convertToProtein(codon);
    proteinArr.push(proteinName);
  };
  return proteinArr;
};

function convertToProtein(codon) {
  switch (codon) {
    case 'AUG':
      return 'Methionine';
    case 'UUU':
    case 'UUC':
      return 'Phenylalanine';
    case 'UUA':
    case 'UUG':
      return 'Leucine';
    case 'UCU':
    case 'UCC':
    case 'UCA':
    case 'UCG':
      return 'Serine';
    case 'UAU':
    case 'UAC':
      return 'Tyrosine';
    case 'UGU':
    case 'UGC':
      return 'Cysteine';
    case 'UGG':
      return 'Tryptophan';
    default:
      throw 'Invalid codon';
  }
}