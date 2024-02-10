// const obj = { a: 1, b: 2, c: 3 };
// const { c, ...props } = obj;
// const modifiedObj = {
//   ...props,
//   c: 12,
// };
// console.log(obj);
// console.log(modifiedObj);

let count = 5;

const parser = {
    increment() {
        count++;
    },
    derement() {
        count--;
    },
    reset(){
        count = 0;
    }
}

parser.increment();
console.log(count);
