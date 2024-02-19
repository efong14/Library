const cardContainer = document.querySelector('.cardContainer')


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
    let newCard = document.createElement ('div');
    newCard.classList.add('card')
    cardContainer.appendChild(newCard)
    for (const key in newBook) {
        let item = document.createElement('div');
        newCard.appendChild(item);
        item.classList.add (key); 
        item.textContent = key + ': ' + newBook[key];
        if (item.textContent == 'Read: Yes') {
            item.classList.add ('yes');
        } else if (item.textContent == 'Read: No' || 'Read: no') {
            item.classList.add ('no');
        };
    };
};

test:
var long = new Book("The Persecution and Assassination of Jean-Paul Marat as Performed by the Inmates of the Asylum of Charenton Under the Direction of the Marquis de Sade", "Peter Weiss ", "896 pages", "not read yet");
var dune = new Book("Dune", "Frank Herbert", "896 pages", "not read yet");
var theHobbit = new Book("The Hobbsit", "J.R.R. Tolkien", "295 pages", "not read yet");


// const theHobbit = new Book ('J.R.R Tolkien', 'The Hobbit', '295 pages', 'No');


