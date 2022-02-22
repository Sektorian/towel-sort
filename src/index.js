
// You should implement your task here.


module.exports = function towelSort (matrix) {
  
  let result = [];
  if (arguments.length === 0) {
    return result;
  } else {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        matrix[i].forEach((element) => {
          result.push(element);
        });
      } else {
      for (let j = matrix[i].length - 1; j >= 0; j--) {
        result.push(matrix[i][j]);
      }
      }
    }
    
   return result;
  }
  
}
