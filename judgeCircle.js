// Problem description
// https://leetcode.com/problems/judge-route-circle/description/

var judgeCircle = moves => {
  var position = { hor: 0, ver: 0 }
  var movesAsArray = moves.split('');

  movesAsArray.map(move => {
    if (move == 'U') position.hor += 1;
    else if (move == 'D') position.hor -= 1;
    else if (move == 'L') position.ver += 1;
    else if (move == 'R') position.ver -= 1;
  });

  if (position.hor == 0 && position.ver == 0) return true;
  else return false;

};