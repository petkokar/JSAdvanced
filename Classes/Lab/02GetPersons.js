function getPersons() {
    class Person {
        firstName;
        lastName;
        age;
        email;
    
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
    
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }

    const peopleArr = [
        new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'),
        new Person('SoftUni'),  // Change 'Softuni' to 'SoftUni'
        new Person('Stephan', 'Johnson', 25),
        new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')
    ];

    return peopleArr;
}

const people = getPersons();
people.forEach(person => console.log(person.toString()));