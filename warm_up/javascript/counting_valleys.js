/*
I: int n-steps, str s-up or down steps
O: int val-number of valleys walked
C: at least two steps; start and end at sealevel, each step is either up or down
E: 

I: 8 uddduduu
O: 1
u-> d -> d valley start count = -1 while in valley count is <0
iterate thru n steps
add one to valley if stepping down from sealevel(currentStep is D and count is -1)

Time complexity is O(n) traverse elements
Constant space
*/
// Complete the countingValleys function below.
function countingValleys(n, s) {
  let valleys = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (s.charAt(i) === 'D') {
      count--;
      if (count === -1) valleys++;
    } else {
      count++;
    }
  }
  return valleys;
}
