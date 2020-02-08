'use strict';

function getNumberOfIslands(islandIdArray) {
  let numberOfIslands = 0;

  const maxCol = islandIdArray[0].length;
  for (let row = 0; row < islandIdArray.length; row++) {
    for (let col = 0; col < islandIdArray[row].length; col++) {
      if (islandIdArray[row][col] != 0) {
        if (!((col > 0 && islandIdArray[row][col - 1] != 0) ||
        (col > 0 && row > 0 && islandIdArray[row - 1][col - 1] != 0) ||
        (row > 0 && islandIdArray[row - 1][col] != 0) ||
        (col < (maxCol - 1) && row > 0 && islandIdArray[row - 1][col + 1] != 0))) {
          numberOfIslands++;
        }
      }
    }
  }

  return numberOfIslands;
};

module.exports = {getNumberOfIslands};
