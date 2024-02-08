function toStringExtension() {
  class Person {
    name;
    email;
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }

    toString() {
      return `Person (name: ${this.name}, email: ${this.email})`;
    }
  }

  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email);
      this.subject = subject;
    }

    toString() {
      return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
    }
  }

  class Student extends Person {
    constructor(name, email, course) {
      super(name, email);
      this.course = course;
    }
    toString() {
      return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
    }
  }

  return {
    Person,
    Teacher,
    Student
  }
}

const { Person, Teacher, Student} = toStringExtension();

const person = new Person('Petko', 'abv.bg');
const teacher = new Teacher('Jana', 'gmail.com', 'Physics');
const student = new Student('Gosho', 'yahoo.com', 'SoftUni');

console.log(person.toString());
console.log(teacher.toString());
console.log(student.toString());
