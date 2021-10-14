const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  const result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
};

// console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
// console.log(
//   allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
// );
// console.log(
//   allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", [
//     "a",
//     "aa",
//     "aaa",
//     "aaaa",
//     "aaaaa",
//   ])
// );

const allConstruct_tab = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);

  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const newCombination = table[i].map((subArray) => [...subArray, word]);
        table[i + word.length].push(...newCombination);
      }
    }
  }
  return table[target.length];
};

console.log(allConstruct_tab("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  allConstruct_tab("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
console.log(
  allConstruct_tab("aaaaaaaaaaaal", ["a", "aa", "aaa", "aaaa", "aaaaa"])
);
