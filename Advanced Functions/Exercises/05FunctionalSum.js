function add(a){
    let sum = a || 0;
    function addNext(number) {
        sum += number;
        return addNext;
    };

    addNext.toString = function() {
        return sum;
    }

    return addNext;

}
const result = add(1)(6)(-3).toString();
console.log(result);
// console.log(add(1));
// console.log(add(1)(6)(-3).toString());