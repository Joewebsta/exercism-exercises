export const translate = (rnaString) => {
  const totCodons = rnaString.length / 3;
  
  for (let i = 0; i < totCodons; i++) {
    const index = 3 * i;
    let codon = rnaString.slice(index, index + 3); 
  }
};

translate('AUGUUUUCU');
