let myLibrary = [];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;

    
}

function addBook(book){
    myLibrary.push(book);
}



function init(){
    let book1 = new Book("Ender's Game", "Orson Scott Card", 350);
    let book2 = new Book("Pathfinder", "Orson Scott Card", 662)

    addBook(book1);
    addBook(book2);

    displayLibrary();
}

function displayLibrary(){
    const display = document.getElementById('books');
    for(let i = 0; i < myLibrary.length; i++)
    {
        const bookDisplayed = document.createElement('div');
        bookDisplayed.classList.add('book');

        const bookTitle = document.createElement('h1');
        bookTitle.innerText = myLibrary[i].title;

        const attributeList = document.createElement('ul');

        const bookAuthor = document.createElement('li');
        bookAuthor.innerText = myLibrary[i].author;
        const bookPages = document.createElement('li');
        bookPages.innerText = myLibrary[i].pages;

        attributeList.appendChild(bookAuthor);
        attributeList.appendChild(bookPages);

        bookDisplayed.appendChild(bookTitle);
        bookDisplayed.appendChild(attributeList);

        display.appendChild(bookDisplayed);
    }
}

init();
