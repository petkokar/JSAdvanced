function sortNumArray(array, criteria) {

    return criteria == 'asc' ? array.sort((a, b) => a - b) : array.sort((a, b) => b - a);
}

console.log(sortNumArray([14, 7, 17, 6, 8], 'desc'));
// let newArr;
// if (criteria == 'asc') {
//     newArr = array.sort((a, b) => a - b);
// } else if (criteria == 'desc') {
//     newArr = array.sort((a, b) => b - a);
// }

// return newArr;