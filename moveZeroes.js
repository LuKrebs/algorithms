// Problem description
// https://leetcode.com/problems/move-zeroes/description/

var moveZeroes = nums => {
  nums.map(num => {
    if (num === 0) {
      let zeroIndex = nums.indexOf(num);
      nums.splice(zeroIndex, 1);
      nums.push(0);
    }
  });
};