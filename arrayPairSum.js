// Problem description
// https://leetcode.com/problems/array-partition-i/description/

var arrayPairSum = nums => {
  let groupedNums = []
  let count = 0;
  let minSum = 0;

  nums.sort((a, b) => {
    return a - b;
  });

  for (var i = 0; i < nums.length; i += 2) {
    groupedNums.push([nums[i], nums[i + 1]]);
  }

  groupedNums.map(subGroup => minSum += subGroup[0]);

  return minSum;
};