function solution(num) {
    let number = num;
    
    return function (added) {
        number += added;
        return number;
    }
}

let add5 = solution(5);

console.log(add5(2));