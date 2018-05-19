// Problem description:
// https://leetcode.com/problems/jewels-and-stones/description/

var numJewelsInStones = (J, S) => {
  let result = 0;

  let arrayS = S.split('');

  arrayS.map(letter => {
    if (J.includes(letter)) result += 1;
  });

  return result;
};