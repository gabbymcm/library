const submit = document.getElementById('submit');

let myLibrary = [];



// set up the book object
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

let book = [];
// create new books
function getInputFromForm() {
    var title = document.getElementById('title');
    var author = document.getElementById('author');
    var pages = document.getElementById('pages');
    var read = document.getElementById('read');
    submit.addEventListener('click', () => {
        if (read.checked){
            book = new Book(title.value, author.value, pages.value, "Read");
        } else {
            book = new Book(title.value, author.value, pages.value, "Not Read");
        }
        
        addBooksToLibrary(book);
    });
};

getInputFromForm();


// add new books to the library

function addBooksToLibrary(newBook) {
    myLibrary.push(newBook);

    var display = document.getElementById('enteredBooks');
    var bookBox = document.createElement('div');
    bookBox.classList.add('bookBox');
    display.appendChild(bookBox);
    
    var bookTitle = document.createElement('h1');
    bookTitle.classList.add('bookTitle');
    bookTitle.textContent = newBook.title;
    var bookAuthor = document.createElement('p');
    bookAuthor.classList.add('bookAuthor');
    bookAuthor.textContent = newBook.author;
    var bookPages = document.createElement('p');
    bookPages.classList.add('bookPages');
    bookPages.textContent = newBook.pages + " pages";
    var bookRead = document.createElement('p');
    bookRead.classList.add('bookRead');
    bookRead.textContent = newBook.read;

    bookBox.appendChild(bookTitle);
    bookBox.appendChild(bookAuthor);
    bookBox.appendChild(bookPages);
    bookBox.appendChild(bookRead);

}






