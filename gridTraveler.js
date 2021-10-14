// Say that your are a traveler on a 2D Grid.
// You begin in the top-left corner and your goal is to travele
// to the bottom-right corner.
// You may only move down or right

// ?: How many ways you travel to the goal (grid: m * n)

//memoization
const gridTraveler = (m, n, memo = {}) => {
  const key = m + "," + n;
  if (key in memo) return memo[key];
  //are the args in the memo
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
};

// console.log(gridTraveler(1, 3));
// console.log(gridTraveler(2, 3));
// console.log(gridTraveler(3, 2));
// console.log(gridTraveler(3, 3));
// console.log(gridTraveler(18, 18));

//tablulation

const gridTraveler_tab = (m, n) => {
  const table = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  table[1][1] = 1;

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j];
      if (i + 1 <= m) table[i + 1][j] += current;
      if (j + 1 <= n) table[i][j + 1] += current;
    }
  }
  return table[m][n];
};

console.log(gridTraveler_tab(1, 3));
console.log(gridTraveler_tab(2, 3));
console.log(gridTraveler_tab(3, 2));
console.log(gridTraveler_tab(3, 3));
console.log(gridTraveler_tab(18, 18));
