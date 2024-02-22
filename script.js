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

openModal.addEventListener('click', () => {
    dialog.showModal();
});

submit.addEventListener('click', (e) => {
    // e.preventDefault();
    // dialog.close()
    new Book (authorIn.value, titleIn.value, pagesIn.value, radio.value);
})


// test:
var long = new Book("Peter Weiss ", "The Persecution and Assassination of Jean-Paul Marat as Performed by the Inmates of the Asylum of Charenton Under the Direction of the Marquis de Sade", "896 pages", "No");
var dune = new Book("Frank Herbert", "Dune", "896 pages", "No");
var theHobbit = new Book("J.R.R. Tolkien", "The Hobbsit", "295 pages", "No");





