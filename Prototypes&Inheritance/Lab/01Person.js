function createPerson(firstName, lastName){
    let object = {
        firstName,
        lastName
    }

    Object.defineProperty(object, 'fullName', {
        enumerable: true,
        configurable: true,
        get(){
            return `${object.firstName} ${object.lastName}`
        },
        set(value) {
            [object.firstName, object.lastName] = value.split(' ')
        }
    })

    return object;
}

const myPerson = createPerson('Petko', 'Ivanov');
console.log(myPerson);
console.log(myPerson.fullName);
myPerson.lastName = 'Kara';
console.log(myPerson.fullName);
console.log(myPerson);