function solve(elements) {
    const sum = (array) => array.reduce((total, num) => total + num, 0);
    const inverseValues = (array) => array.reduce((total, num) => total + 1 / num, 0);
    const concatenation = (array) => array.map(String).join("");

    console.log(sum(elements));
    console.log(inverseValues(elements));
    console.log(concatenation(elements));

}

solve([1, 2, 3]);
