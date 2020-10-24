let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    
}

function addBook(book){
    myLibrary.push(book);
}



function init(){
    let book1 = new Book("Ender's Game", "Orson Scott Card", 350, true);
    let book2 = new Book("Pathfinder", "Orson Scott Card", 662, false);

    addBook(book1);
    addBook(book2);

    displayNewBookBtn();

    displayLibrary();
}

function displayNewBookBtn(){
    const display = document.getElementById('books');
    const newBook = document.createElement('button');
    newBook.id = 'newBook';
    newBook.innerText = 'New';
    newBook.addEventListener('click', function() {showNewBookForm()})
    display.appendChild(newBook);
}

function showNewBookForm(){
    document.getElementById('newBook').disabled = true;
    
    
    const display = document.getElementById('formDisplay');
    const newBookForm = document.createElement('form');

    const titleLabel = document.createElement('label');
    titleLabel.innerText = 'Book Title:';
    titleLabel.htmlFor  = "title";

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'title';
    titleInput.name = 'titleName';
    titleInput.value = '';

    const authorLabel = document.createElement('label');
    authorLabel.innerText = 'Author:';
    authorLabel.htmlFor  = "author";

    const authorInput = document.createElement('input');
    authorInput.type = 'text';
    authorInput.id = 'author';
    authorInput.name = 'authorName';
    authorInput.value = '';


    const pageLabel = document.createElement('label');
    pageLabel.innerText = 'Pages:';
    pageLabel.htmlFor  = "pages";

    const pageInput = document.createElement('input');
    pageInput.type = 'text';
    pageInput.id = 'pages';
    pageInput.name = 'pageName';
    pageInput.value = '';

    const submit = document.createElement('button');
    submit.innerText = 'Submit';
    submit.addEventListener('click', function(){
        let createdBook = new Book(titleInput.value, authorInput.value, pageInput.value);
        addBook(createdBook);
        refreshDisplay();
        removeForm();
        document.getElementById('newBook').disabled = false;
    })

    newBookForm.appendChild(titleLabel);
    newBookForm.appendChild(titleInput);
    newBookForm.appendChild(authorLabel);
    newBookForm.appendChild(authorInput);
    newBookForm.appendChild(pageLabel);
    newBookForm.appendChild(pageInput);
    newBookForm.appendChild(submit);

    display.appendChild(newBookForm);
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
        bookAuthor.innerText = "Author: " + myLibrary[i].author;
        const bookPages = document.createElement('li');
        bookPages.innerText = "Page Count: " + myLibrary[i].pages;

        attributeList.appendChild(bookAuthor);
        attributeList.appendChild(bookPages);
        if (myLibrary[i].read)
        {
            bookDisplayed.style.backgroundColor = 'green'
        }
        else{
            bookDisplayed.style.backgroundColor = 'red';
        }
        bookDisplayed.appendChild(bookTitle);
        bookDisplayed.appendChild(attributeList);

        display.appendChild(bookDisplayed);
    }
}

init();
