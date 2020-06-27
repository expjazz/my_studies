function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = true;
  this.info = function () {
    if (this.read === true) {
      return `${this.title} by ${this.author}, ${this.pages}, read`;
    } else {
      return `${this.title} by ${this.author}, ${this.pages}, not read yet`;
    }
  };
}

function Comunicator() {
  this.lol = function () {
    console.log("lol");
  };
}

Book.prototype = Comunicator;
let book = new Book("Harry Potther", "JK Rownlings", 799);
console.log(book.info());
book.read = false;
console.log(book.info());
Book.prototype.test = function () {
  console.log("whatever");
};
console.log(book.info);
let books = new Object();
Object.prototype.whatever = function () {
  console.log("a");
};
book.lol();
console.log(book.constructor);
books.whatever();
console.log(books.constructor);
book.whatever();
