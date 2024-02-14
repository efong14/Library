const author = document.querySelector('.author')
const title = document.querySelector('.title')
const pages = document.querySelector('.pages')
const read = document.querySelector('.read')

const myLibrary = [];

function Book (author, title, pages, status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = status;
    addBookToLibrary (this);
}

function addBookToLibrary (newBook) {
    myLibrary.push (newBook)
    myLibrary.forEach(book => {
        console.log(book.read);
    });
    myLibrary.forEach(book => {
        author.textContent = book.author;
        title.textContent = book.title;
        pages.textContent = book.pages;
        read.textContent = book.read;
    })

}

