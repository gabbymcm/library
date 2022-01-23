let myLibrary = []

const submit = document.getElementById("submit")

//set up the book object
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// Create a new book
function createNewBook() {
    let title = document.getElementById("title")
    let author = document.getElementById("author")
    let pages = document.getElementById("pages")
    let read = document.getElementById("read")

    submit.addEventListener('click', () => {
        validateForm()
        if (validate){
            book = new Book(title.value, author.value, pages.value, read.checked)
            addBookToLibrary(book)
            createLibrary(book)
            saveData()
            updateDisplay()
        } else {
            document.getElementById("bookForm").reset()
        }
    })
}

let validate = true

function validateForm(){
    validate = true
    let x = document.forms["bookForm"]["title"].value
    if (x == "") {
        alert("Title cannot be left blank")
        return validate = false
    }

    let y = document.forms["bookForm"]["author"].value
    if (y == "") {
        alert("Author cannot be left blank")
        return validate = false
    }

    let z = document.forms["bookForm"]["pages"].value
    if (z == "") {
        alert("Number of pages cannot be left blank")
        return validate = false
    }
}

// Add the new book to myLibrary
function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
}

// Update visual library
function createLibrary(newBook) {
    const library = document.getElementsByClassName('library')[0]
    const bookBox = document.createElement('div')
    bookBox.classList.add('bookBox')
    library.appendChild(bookBox)
    
    const bookTitle = document.createElement('h1')
    bookTitle.classList.add('bookTitle')
    bookTitle.textContent = newBook.title
    bookBox.appendChild(bookTitle)

    const bookAuthor = document.createElement('p')
    bookAuthor.classList.add('bookAuthor')
    bookAuthor.textContent = newBook.author
    bookBox.appendChild(bookAuthor)

    const bookPages = document.createElement('p')
    bookPages.classList.add('bookPages')
    bookPages.textContent = newBook.pages + " pages"
    bookBox.appendChild(bookPages)

    //delete button
    const removeBtn = document.createElement('button')
    removeBtn.classList.add('remove')
    removeBtn.textContent = "X"
    bookBox.appendChild(removeBtn)

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(newBook), 1)
        saveData()
        updateDisplay()
    })

    // read button and toggle on each individual book
    const readBtn = document.createElement('button')
    readBtn.classList.add('readBtn')
    if (newBook.read === false){
        readBtn.textContent = "Not Read"

    } else {
        readBtn.textContent = "Read"
    }
    bookBox.appendChild(readBtn)

    readBtn.addEventListener('click', () => {
        newBook.read = !newBook.read
        console.log(newBook)
        saveData()
        updateDisplay()
    })
}

// save library data locally
function saveData () {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
}


// update the display
function updateDisplay () {
        var refresh = JSON.parse(localStorage.getItem('myLibrary'))
        myLibrary = refresh
        displayLibrary(myLibrary)
}

function displayLibrary() {
    const library = document.getElementsByClassName('library')[0]
    const books = document.querySelectorAll('.bookBox')
    books.forEach(book => library.removeChild(book))

    for (let i = 0; i < myLibrary.length; i++){
        createLibrary(myLibrary[i])
    }
}

// run functions
createNewBook()

displayLibrary(myLibrary);