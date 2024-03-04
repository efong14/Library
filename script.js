const cardContainer = document.querySelector('.cardContainer');
const dialog = document.querySelector('dialog');
const openModal = document.querySelector('.openModal');
const submit = document.querySelector('.submit');
const cancel = document.querySelector('.cancel');
const frm = document.querySelector('form');
const authorIn = document.getElementById ('author');
const titleIn = document.getElementById ('title');
const pagesIn = document.getElementById ('pages');
const readVal = document.getElementById ('readStatus');

const myLibrary = [];


openModal.addEventListener('click', () => {
    dialog.showModal();
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
    readVal.checked == true ? readIn = 'Yes' : readIn = 'No';
    new Book (authorIn.value, titleIn.value, (pagesIn.value + ' pages'), readIn);
    frm.reset();
})

function Book(author, title, pages, status) {
    this.Author = author;
    this.Title = title;
    this.Pages = pages;
    this.Read = status;
    addBookToLibrary(this);
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    displayBook(newBook);
}

function displayBook(newBook) {
    let newCard = document.createElement('div');
    newCard.classList.add('card');
    cardContainer.appendChild(newCard);
    displayEntry(newCard, 'Author', newBook.Author);
    displayEntry(newCard, 'Title', newBook.Title);
    displayEntry(newCard, 'Pages', newBook.Pages);
    readBtn(newCard, newBook);
    deleteBtn(newCard, newBook);
}

function displayEntry (newCard, itemClass, itemContent) {
    let item = document.createElement('div');
    newCard.appendChild(item);
    item.classList.add(itemClass); 
    item.textContent = itemClass + ': ' + itemContent;
}

function readBtn (newCard, newBook) {
    let toggleRead = document.createElement ('button');
    toggleRead.classList.add('Read')
    toggleRead.classList.add(newBook.Read);
    toggleRead.textContent = 'Read: ' + newBook.Read;
    newCard.appendChild(toggleRead);
    toggleRead.addEventListener('click', () => {
        if(newBook.Read == 'Yes') {
            newBook.Read = 'No';
            toggleRead.textContent = 'Read: No';
            toggleRead.classList = 'Read No'
        } else {
            newBook.Read = 'Yes';
            toggleRead.textContent = 'Read: Yes';
            toggleRead.classList = 'Read Yes'
        };
    });
}

function deleteBtn(newCard, newBook) {    
    let removeBook = document.createElement('button');
    removeBook.textContent = 'Remove book';
    newCard.appendChild(removeBook);
    removeBook.addEventListener('click', () => {
        newCard.remove();
        let indexed = myLibrary.findIndex((book) => book.Title == newBook.Title);
        myLibrary.splice(indexed, 1);
    });
}


// Books on load:
var long = new Book("Peter Weiss ", "The Persecution and Assassination of Jean-Paul Marat as Performed by the Inmates of the Asylum of Charenton Under the Direction of the Marquis de Sade", "896 pages", "No");
var dune = new Book("Frank Herbert", "Dune", "896 pages", "No");
var theHobbit = new Book("J.R.R. Tolkien", "The Hobbit", "295 pages", "Yes");





