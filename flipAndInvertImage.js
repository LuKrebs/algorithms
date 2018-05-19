// Problem description
// https://leetcode.com/problems/flipping-an-image/description/

var flipAndInvertImage = A => {
  A.map(array => array = array.reverse());

  invertedArray = A;

  invertedArray.map(arr => {
    arr.map((element, index) => {
      if (element == 1) arr[index] = 0;

      else arr[index] = 1;
    });
  });

  return invertedArray;
};