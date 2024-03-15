// export function sumNumbers(num1, num2) {
//   const total = num1 + num2;
//   return total;
// }

export function bandNameGenerator(word1, word2) {
  // use the slice method to extract half of the word1
  // calcute the lenght of the word1
  // divide the lenght of the  word1 by 2
  // round down to the nearest whole number.
  let firstPart = word1.slice(0, Math.floor(word1.length / 2));

  // use the slice method to extract half of the word2
  // calcute the lenght of the word2
  // divide the lenght of the  word2 by 2
  // round down to the nearest whole number.
  let secondPart = word2.slice(Math.floor(word2.length / 2));

  return `${firstPart}${secondPart} and the ${word2} crew`;
}
