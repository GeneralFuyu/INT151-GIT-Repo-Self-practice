function getFreqOfWords(sentence) {
  if (sentence === null || sentence === undefined) {
    return undefined;
  }
  const words = sentence.toLowerCase().split(/\s+/);
  const freq = {};
  for (const word of words) {
    if (word) {
      freq[word] = (freq[word] || 0) + 1;
    }
  }
  return freq;
}
console.log(getFreqOfWords('Today is present and present is your gift'))
console.log(getFreqOfWords('Do you best just do it'))
console.log(getFreqOfWords(null))
console.log(getFreqOfWords(undefined))