// brute force - Time Complexity: O(3^n) Space Complexity: O(1)
function stepPerms(staircaseLength) {
  // base cases
  if (staircaseLength === 0) return 1;
  if (staircaseLength < 0) return 0;

  let ways =
    stepPerms(staircaseLength - 1) +
    stepPerms(staircaseLength - 2) +
    stepPerms(staircaseLength - 3);

  return ways % 10000000007;
}

// Memoization-Time Complexity O(n); Space Complexity O(n)
function stepPerms(staircaseLength) {
  return stepPermsMemo(staircaseLength, []);
}

function stepPermsMemo(staircaseLength, memo) {
  // base cases
  if (staircaseLength === 0) return 1;
  if (staircaseLength < 0) return 0;
  if (memo[staircaseLength]) {
    return memo[staircaseLength] % 10000000007;
  } else {
    memo[staircaseLength] =
      stepPermsMemo(staircaseLength - 1, memo) +
      stepPermsMemo(staircaseLength - 2, memo) +
      stepPermsMemo(staircaseLength - 3, memo);
  }
  return memo[staircaseLength] % 10000000007;
}

// Dynamic programming-Time Complexity O(n); space complexity O(n)
function stepPermsDP(staircaseLength) {
  // paths for i steps
  let paths = [1, 1, 2];
  for (let i = 3; i <= staircaseLength; i++) {
    paths[i] = paths[i - 1] + paths[i - 2] + paths[i - 3];
  }
  return paths[staircaseLength];
}

// Dynamic programming-Time Complexity O(n); space complexity O(1)
function stepPermsDP(staircaseLength) {
  // paths for i steps
  let paths = [1, 1, 2];
  if (staircaseLength === 0 || staircaseLength === 1) return 1;
  if (staircaseLength < 0) return 0;
  for (let i = 3; i <= staircaseLength; i++) {
    let temp = paths[0] + paths[1] + paths[2];
    paths[0] = paths[1];
    paths[1] = paths[2];
    paths[2] = temp;
  }
  return paths[2];
}
