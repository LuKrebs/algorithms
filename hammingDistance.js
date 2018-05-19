// Problem description
// https://leetcode.com/problems/hamming-distance/description/

var hammingDistance = (x, y) => {
  const maxLength = 30;
  let differences = 0;

  var binaryX = (x >>> 0).toString(2);
  var binaryY = (y >>> 0).toString(2);

  binaryY = binaryY.split('');
  binaryX = binaryX.split('');

  const highestLength = (binaryY.length > binaryX.length) ? binaryY.length : binaryX.length;

  if (binaryY.length != binaryX.length) {
    for (let counter = binaryY.length; counter < highestLength; counter++) { binaryY.unshift('0') }

    for (let counter = binaryX.length; counter < highestLength; counter++) { binaryX.unshift('0') }
  }

  for (let index = 0; index < highestLength; index++) {
    if (binaryY[index] != binaryX[index]) differences += 1;
  }

  return differences;
};