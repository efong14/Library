const cardContainer = document.querySelector('.cardContainer');
const dialog = document.querySelector('dialog');
const openModal = document.querySelector('.openModal');
const submit = document.querySelector('.submit');
const cancel = document.querySelector('.cancel');
const radio = document.querySelector ('input[name=read]:checked');
const authorIn = document.getElementById ('author');
const titleIn = document.getElementById ('title');
const pagesIn = document.getElementById ('pages');

const myLibrary = [];


openModal.addEventListener('click', () => {
    dialog.showModal();
});

submit.addEventListener('click', (e) => {
    // e.preventDefault();
    // dialog.close()
    new Book (authorIn.value, titleIn.value, pagesIn.value, radio.value);
    displayLibrary();
})

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
    newCard.classList.add('card');
    newCard.setAttribute('booknum', (myLibrary.length - 1));
    cardContainer.appendChild(newCard);
    for (const key in newBook) {
        let item = document.createElement('div');
        newCard.appendChild(item);
        item.classList.add (key); 
        item.textContent = key + ': ' + newBook[key];
    };
    // FIGURE OUT HOW TO REMOVE FROM MYLIBRARY AFTER THE FIRST REMOVAL
    let removeBook = document.createElement ('button');
    removeBook.textContent = 'Remove book';
    newCard.appendChild(removeBook);
    removeBook.addEventListener('click', () => {
        newCard.remove();
        console.log (newBook.Author)
        let indexed = myLibrary.findIndex((book) => book.Author == newBook.Author)
        myLibrary.splice(indexed, 1)
    });
};

// function displayLibrary() {
//     myLibrary.forEach(book => {
//         let newCard = document.createElement ('div');
//         newCard.classList.add('card');
//         newCard.setAttribute('booknum', (myLibrary.indexOf(book)));
//         cardContainer.appendChild(newCard);
//         for (const key in book) {
//             let item = document.createElement('div');
//             newCard.appendChild(item);
//             item.classList.add (key); 
//             item.textContent = key + ': ' + book[key];
//         };
//         let removeBook = document.createElement ('button');
//         removeBook.textContent = 'Remove book';
//         newCard.appendChild(removeBook);
//         removeBook.addEventListener('click', () => {
//             allCards.remove();
//             console.log(allCards);
//             // myLibrary.splice(newCard.getAttribute('booknum'), 1);
//         });
//     });
// }


// test:
var long = new Book("Peter Weiss ", "The Persecution and Assassination of Jean-Paul Marat as Performed by the Inmates of the Asylum of Charenton Under the Direction of the Marquis de Sade", "896 pages", "No");
var dune = new Book("Frank Herbert", "Dune", "896 pages", "No");
var theHobbit = new Book("J.R.R. Tolkien", "The Hobbsit", "295 pages", "No");





