// Problem description
// https://leetcode.com/problems/single-number/description/

const singleNumber = nums => {
  let appearsCount = {};
  let uniqueNumber = 0;

  nums.map(num => {
    appearsCount[num] = (!appearsCount[num]) ? 1 : appearsCount[num] + 1
  });

  Object.keys(appearsCount).map(key => {
    if (appearsCount[key] == 1) return uniqueNumber = parseInt(key);
  });

  return uniqueNumber;
};
