function isMagical(matrix) {
    const rowLength = matrix.length;
    const colLength = matrix[0].length;

    const expectedSum = matrix[0].reduce((a, b) => a + b, 0);

    for(let i = 1; i < rowLength; i++) {
        let rowSum = matrix[i].reduce((a, b) => a + b, 0);

        if (rowSum !== expectedSum) {
            return false;
        }
    }

    for (let j = 0; j < colLength; j++) {
        let colSum = 0;
        for (let i = 0; i < rowLength; i++) {
            colSum += matrix[i][j];
        }
        if (colSum !== expectedSum) {
            return false;
        }
    }

    return true;

}

console.log(isMagical([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]))