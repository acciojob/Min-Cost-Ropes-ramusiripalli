function mincost(arr) {
  if (arr.length <= 1) return 0;

  let cost = 0;

  while (arr.length > 1) {
    // sort array in ascending order
    arr.sort((a, b) => a - b);

    // pick two smallest ropes
    let first = arr.shift();
    let second = arr.shift();

    let sum = first + second;
    cost += sum;

    // push the combined rope back
    arr.push(sum);
  }

  return cost;
}

module.exports = mincost;