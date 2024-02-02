function sumRange(array, start, end) {

    if(!Array.isArray(array)) {
        return NaN;
    }

    if (start < 0) {
        start = 0;
    }

    if (end >= array.length) {
        end = array.length - 1;
    }

    return array
    .slice(start, end + 1)
    .map(Number)
    .reduce((a, b) => a + b, 0)
}

console.log(sumRange([10, 20, 30, 40, 50, 60], 3, 300));