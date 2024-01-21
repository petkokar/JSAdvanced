function diagonalSum(arrays) {
    const size = arrays.length;

    let mainDiagonal = 0;
    let secondaryDiagonal = 0;

    for(let i = 0; i < size; i++) {
        mainDiagonal += arrays[i][i];
        secondaryDiagonal += arrays[i][size - 1 - i];
    }

    const result = `${mainDiagonal} ${secondaryDiagonal}`
    return result;
}

diagonalSum([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]])