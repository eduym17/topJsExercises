function Book(title, author, pages, status) {
  this.title = title;
  this.author= author;
  this.pages = pages;
  this.status = status;
  this.bookInfo = function() {
    console.log(title,'by', author,',', pages,',', status);
  }
}

const book1 = new Book('The Hobbit','J.R.R. Tolkien','295 pages','not read');
const book2 = new Book('La sombra del viento','Carlos Ruiz Zafón','400 páginas','ultra read');
const book3 = new Book('La catedral del mar','Ildefonso Falcones','897','not read');

book1.bookInfo();
book2.bookInfo();
book3.bookInfo();

console.log('----------------------------');

console.log(book1.title.toUpperCase());
console.log(book1.author.toLowerCase());
console.log(book1.pages);
console.log(book1.status);

console.log('----------------------------');

console.log(book2["title"].toUpperCase());
console.log(book2["author"].toLowerCase());
console.log(book2["pages"]);
console.log(book2["status"]);