module.exports = function countCats(matrix) {
  let number = 0;
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++)  {
      if (matrix[i][j] == "^^") {
        number += 1;
      }
    }
  }

  return number;
};
