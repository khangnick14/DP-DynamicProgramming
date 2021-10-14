const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      //if the combination is shorter than the current "shortest", update
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  memo[targetSum] = shortestCombination;
  return shortestCombination;
};

// console.log(bestSum(7, [5, 3, 4, 7]));
// console.log(bestSum(7, [2, 3, 5]));
// console.log(bestSum(8, [1, 4, 5]));
// console.log(bestSum(100, [1, 2, 5, 25]));

const bestSum_tab = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] != null) {
      for (let num of numbers) {
        const combination = [...table[i], num];
        //if this current combination is shorter than what is already stored
        if (!table[i + num] || table[i + num].length > combination.length) {
          table[i + num] = combination;
        }
      }
    }
  }
  return table[targetSum];
};

console.log(bestSum_tab(7, [5, 3, 4, 7]));
console.log(bestSum_tab(7, [2, 3, 5]));
console.log(bestSum_tab(8, [1, 4, 5]));
console.log(bestSum_tab(100, [1, 2, 5, 25]));
