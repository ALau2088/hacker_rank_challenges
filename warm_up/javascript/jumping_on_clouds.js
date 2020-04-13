// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
  let jumps = null;
  for (let i = 0; i < c.length; i++) {
    if (c[i] === 0) {
      // first element that is 0
      if (jumps === null) {
        jumps = 0;
      }
      // check next element
      if (c[i + 1] === 0) {
        jumps++;
        // check if can jump one more further
        if (c[i + 2] === 0) {
          i++;
        }
      }
      // if next element is one
      if (c[i + 1] === 1 && c[i + 2] === 0) {
        jumps++;
        i++;
      }
    }
    console.log(i, jumps);
  }
  return jumps;
}
