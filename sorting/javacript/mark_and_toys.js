function maximumToys(prices, k) {
  // bubble sort n^2
  // [1,12,5,111,200,1000,10]
  // [1,5,12,111,200,10,1000]
  // [1,5,12,111,10,200,1000]
  // [1,5,12,10,111,200,1000]
  // [1,5,10,12,111,200,1000]

  // selection sort
  //after k passes through the array, the first k  elements are in sorted order
  // [1,12,5,111,200,1000,10]
  // [1,5,12,111,200,1000,10]
  // [1,5,10,12,111,200,1000]

  // insertion sort-Insertion sort is very similar to selection sort. As in selection sort, after k passes through the array, the first k elements are in sorted order. However, the fundamental difference between the two algorithms is that for selection sort these are the k smallest elements of the unsorted input, while in insertion sort they are simply the first k elements of the input
  // [1,12,5,111,200,1000,10]
  // [1,12,5,111,200,1000,10]
  // [1,5,12,111,200,1000,10]
  // [1,5,12,111,200,1000,10]
  // [1,5,12,111,200,1000,10]
  // [1,5,10, 12,111,200,1000]
  let swap;
  do {
    let swaps = 0;
    for (let i = 0; i < prices.length - 1; i++) {
      if (prices[i] > prices[i + 1]) {
        let temp = prices[i];
        prices[i] = prices[i + 1];
        prices[i + 1] = temp;
        swaps++;
      }
    }
    if (swaps > 0) {
      swap = true;
    } else {
      swap = false;
    }
  } while (swap === true);

  let toys = 0;
  for (let i = 0; i < prices.length; i++) {
    if (k >= prices[i]) {
      toys++;
      k -= prices[i];
    } else {
      break;
    }
  }
  return toys;
}
