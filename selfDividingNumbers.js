// Problem description
// https://leetcode.com/problems/self-dividing-numbers/description/

var selfDividingNumbers = (left, right) => {
  let selfDividingResult = [];

  for (left; left <= right; left++) {
    let isSelfDriving = true;
    let leftNumberToArray = left.toString().split('');

    leftNumberToArray.map(element => {
      if (!(left % element == 0)) isSelfDriving = false;
    });

    (isSelfDriving) ? selfDividingResult.push(left) : null;
  }

  return selfDividingResult;
};