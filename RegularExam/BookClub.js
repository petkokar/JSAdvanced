class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook (title, author) {
        let foundBook = this.books.find((book) => book.title === title);

        if(foundBook) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`;
        }

        this.books.push({ title, author });
        return `The book "${title}" by ${author} has been added to ${this.library} library.`
    }

    addMember (memberName) {
        if(this.members.includes(memberName)) {
            return `Member ${memberName} is already a part of the book club.`;
        }

        this.members.push(memberName);
        return `Member ${memberName} has been joined to the book club.`;
    }

    assignBookToMember (memberName, bookTitle) {
        if(!this.members.includes(memberName)) {
            throw new Error(`Member ${memberName} not found.`)
        }
        let foundBook = this.books.findIndex((book) => book.title === bookTitle);
        if(foundBook === -1) {
            throw new Error(`Book "${bookTitle}" not found.`)
        } else {
            const assignedBook = this.books.splice(foundBook, 1)[0];
            return `Member ${memberName} has been assigned the book "${assignedBook.title}" by ${assignedBook.author}.`
        }

    }

    generateReadingReport () {
        if(this.members.length === 0) {
            return 'No members in the book club.';
        }

        if(this.books.length === 0) {
            return 'No available books in the library.'
        }

        let result = `Available Books in ${this.library} library:\n`;
        this.books.forEach((book) => {
            result += `"${book.title}" by ${book.author}\n`;
        })

        return result.trim();
    }
}

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
console.log(myBookClub.generateReadingReport());


