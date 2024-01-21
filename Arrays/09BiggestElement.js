function biggest(arrays) {
//   let biggestNum = 0;

//   for (let array of arrays) {
//     let bigNum = Math.max(...array)
//     if (biggestNum <= bigNum) {
//       biggestNum = bigNum;
//     }
//   }
//   return biggestNum;

    let flattenedArr = arrays.flat();
    let biggestEl = Math.max(...flattenedArr);
    return biggestEl;
}

biggest([
  [20, 50, 10],
  [8, 33, 145],
]);
