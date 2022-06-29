//array to store book objects
let myLibrary = [{ title: "Big Book", author: "Some Dude", pages: "250", read: true }, { title: "Other Book", author: "young person", pages: "321", read: false }];

//the constructor for Book object
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//takes user input and stores book objects in array
function addBookToLibrary() {
    let book = new Book(
        title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        pages = document.getElementById('pages').value,
        read = document.getElementById('read').checked
    )
    myLibrary.push(book);
    displayBook();
    makeListeners();
    changeReadStatus();
}

//creates html elements for every object in array
function displayBook() {
    // first check if div has elements and remove them all
    let parentElement = document.querySelector('.books');
    while (parentElement.hasChildNodes()) {
        parentElement.removeChild(parentElement.firstChild);
    }

    //for every object in array create card element
    for (i = 0; i < myLibrary.length; i++) {


        const container = document.querySelector('.books');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.setAttribute('data-index', i);

        const heading = document.createElement('h3')
        const para = document.createElement('p')

        const bookTitle = document.createElement('div');
        bookTitle.classList.add('title');
        const headingTitle = document.createElement('h3')
        headingTitle.textContent = "Title:"
        const paraTitle = document.createElement('p')
        paraTitle.textContent = myLibrary[i].title

        const bookAuthor = document.createElement('div');
        bookAuthor.classList.add('author');
        const headingAuthor = document.createElement('h3');
        headingAuthor.textContent = "Author:"
        const paraAuthor = document.createElement('p');
        paraAuthor.textContent = myLibrary[i].author;

        const bookPages = document.createElement('div');
        bookPages.classList.add('pages');
        const headingPages = document.createElement('h3');
        headingPages.textContent = "Pages:"
        const paraPages = document.createElement('p');
        paraPages.textContent = myLibrary[i].pages;

        const readIt = document.createElement('div');
        readIt.classList.add('read-it');
        const action = document.createElement('div');
        action.classList.add('action')
        action.setAttribute('data-index', i)
        if (myLibrary[i].read == true) {
            action.textContent = "Read";
        } else {
            action.textContent = "not read";
        }
        const remove = document.createElement('div');
        remove.classList.add('remove');
        remove.setAttribute('data-index', i);
        remove.textContent = "Remove"

        bookTitle.appendChild(headingTitle);
        bookTitle.appendChild(paraTitle);

        bookAuthor.appendChild(headingAuthor);
        bookAuthor.appendChild(paraAuthor);

        bookPages.appendChild(headingPages);
        bookPages.appendChild(paraPages);

        cardDiv.appendChild(bookTitle);

        cardDiv.appendChild(bookAuthor);

        cardDiv.appendChild(bookPages);

        readIt.appendChild(action);
        readIt.appendChild(remove);
        cardDiv.appendChild(readIt);

        container.appendChild(cardDiv);
    }
}


//creates event listeners for remove button and numbers them by array index
function makeListeners() {
    const removeBtn = document.querySelectorAll('.remove');
    for (i = 0; i < removeBtn.length; i++) {
        removeBtn[i].addEventListener('click', function () {
            let card = this.dataset.index;
            myLibrary.splice(card, 1);
            displayBook();
            makeListeners();
            changeReadStatus();
        });
    }
}

function changeReadStatus() {
    const readBtn = document.querySelectorAll('.action');
    for (i = 0; i < readBtn.length; i++) {
        readBtn[i].addEventListener('click', function () {
            let index = this.dataset.index;
            if (myLibrary[index].read == true) {
                myLibrary[index].read = false;
                this.textContent = "not read"
            } else if (myLibrary[index].read == false) {
                myLibrary[index].read = true;
                this.textContent = "Read"
            }
        });
    }
}

displayBook();
changeReadStatus();
makeListeners();
