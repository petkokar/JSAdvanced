class Stringer {
    string;
    length;
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        if(length > this.innerLength) {
            this.innerLength = 0;
        } else {
            this.innerLength -= length;
        }
    }

    toString(){
        if (this.innerString.length > this.innerLength) {
            let diff = this.innerString.length - this.innerLength;
            let truncString = this.innerString.slice(0, -diff) + '...';
            return truncString;
        } 
        return this.innerString;
    }
}

let test = new Stringer("Test", 5);

console.log(test.toString()); // Test

test.decrease(3);

console.log(test.toString()); // Te...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4);

console.log(test.toString()); // Test