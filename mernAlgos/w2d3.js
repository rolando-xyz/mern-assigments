const squareMatrix1 = [
    [1, 2, 3], //arr[0][0]. arr[0][2]
    [4, 5, 6], //arr[1][1]. arr[1][1]
    [9, 8, 9], //arr[2][2]. arr[2][0]
  ];
  const expected1 = 2;
  
  
  
    //left to right diagonal: 1 + 5 + 9 = 15
    //right to left diagonal: 3 + 5 + 9 = 17
    //absolute difference = 2
  
  const squareMatrix2 = [
    [1, 2, 3, 4, 5], //arr[0][0]. arr[0][arr.length-1]
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ];
  const expected2 = 0;
  //left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
  //right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
  //absolute difference = 0
  
  
  function diagonalDifference(sqrMatrix) {
    //given a square matrix (2d array) of integers
    // calculate the absolute difference between the sum of its diagonals

        var n = sqrMatrix.length;
        var d1 = 0;
        var d2 = 0;
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                // finding the sum of primary diagonal
                if (i === j) {
                    d1 += sqrMatrix[i][j];
                }
                // finding the sum of secondary diagonal
                if (i + j === n - 1) {
                    d2 += sqrMatrix[i][j];
                }
            }
        }
        return Math.abs(d1 - d2);

    }

    console.log(diagonalDifference(squareMatrix1));
    console.log(diagonalDifference(squareMatrix2));