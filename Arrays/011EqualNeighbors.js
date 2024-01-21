function equalNeighbors(matrix) {
    const matrixSize = matrix.length;
    let equalSum = 0;

    for(let i = 0; i < matrixSize; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if (j < matrix[i].length - 1 && matrix[i][j] === matrix[i][j + 1]) {
                equalSum++;
            }

            if (i < matrix.length - 1 && matrix[i][j] === matrix[i + 1][j]) {
                equalSum++;
            }
        }
    }
    return equalSum;
}

equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']])