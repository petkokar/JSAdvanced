// let object = {
//     name: 'Petko',
//     age: 25
// }

// // console.log(Object.getOwnPropertyDescriptor(object, 'name'));
// Object.defineProperty(object, 'county', {
//     value: 'Bulgaria',
//     enumerable: true,
//     writable: true,
//     configurable: true
// })

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log(`${this.name} says hi!`);
};

const obj = new Person('Petko', 25);

console.log(obj);
obj.sayHello();

console.log(obj.__proto__);b  