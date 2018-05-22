// Problem description
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
// p.s: poor resulution... Needs to improve runtime

var findDisappearedNumbers = nums => {
  if (!nums.length > 0) {
    return nums;
  }

  let length = nums.length;

  nums = Array.from(new Set(nums));

  for (let iteratorNumber = 1; iteratorNumber <= length; iteratorNumber++) {
    if (nums.includes(iteratorNumber)) {
      nums.splice(nums.indexOf(iteratorNumber), 1);
    } else {
      nums.push(iteratorNumber);
    }
  }

  return nums;
};