export const translate = (rnaString = '') => {
  if (rnaString.length === 0) { return [] }
  const rnaStringLength = rnaString.length; 
  const totCodons = rnaStringLength / 3;
  const proteinArr = [];

  if (rnaStringLength % 3 !== 0) { throw 'Invalid codon' };

  for (let i = 0; i < totCodons; i++) {
    const index = 3 * i;

    const codon = rnaString.slice(index, index + 3);

    if (codon === 'UAA' || codon === 'UAG' || codon === 'UGA') { return proteinArr }

    switch (codon) {
      case 'AUG':
        proteinArr.push('Methionine');
        break;
      case 'UUU':
      case 'UUC':
        proteinArr.push('Phenylalanine');
        break;
      case 'UUA':
      case 'UUG':
        proteinArr.push('Leucine');
        break;
      case 'UCU':
      case 'UCC':
      case 'UCA':
      case 'UCG':
        proteinArr.push('Serine');
        break;
      case 'UAU':
      case 'UAC':
        proteinArr.push('Tyrosine');
        break;
      case 'UGU':
      case 'UGC':
        proteinArr.push('Cysteine');
        break;
      case 'UGG':
        proteinArr.push('Tryptophan');
        break;
      default:
        throw 'Invalid codon';
    }
  }
  return proteinArr;
  };