const card = document.querySelector('.card')


const myLibrary = [];

function Book (author, title, pages, status) {
    this.Author = author;
    this.Title = title;
    this.Pages = pages;
    this.Read = status;
    addBookToLibrary (this);
}

function addBookToLibrary (newBook) {
    myLibrary.push (newBook);
    myLibrary.forEach(book => {
        console.log(book.read);
    });
    myLibrary.forEach(book => {
        for (const key in book) {
            let item = document.createElement('div');
            card.appendChild(item);
            item.classList.add (key);
            item.textContent = key + ': ' + book[key];
            if (item.textContent == 'Read: Yes') {
                item.classList.add ('yes')
            } else if (item.textContent == 'Read: No' || 'Read: no') {
                item.classList.add ('no')
            }
        };
    });
}



const theHobbit = new Book ('J.R.R Tolkien', 'The Hobbit', '295 pages', 'No');


