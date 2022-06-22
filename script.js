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
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');
    let read = document.getElementById('read');
    let book = new Book(title, author, pages, read)
    myLibrary.push(book);
}

function displayBook(book) {
    for (i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);

        const container = document.querySelector('.books');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

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
        if (myLibrary[i].read == true) {
            action.textContent = "Read";
        } else {
            action.textContent = "not read";
        }
        const remove = document.createElement('div');
        remove.classList.add('remove');
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