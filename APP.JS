//Book Class
class Book{
    constructor(title, author, isbn){
        this.author = author;
        this.title = title;
        this.isbn = isbn;

    }
}

//UI class
class UI{
    static displayBooks(){
        const storedBooks = [
            {
                title: 'One',
                author: 'Jeffery Archer',
                isbn : '0001'
            },
            {
                title : 'Two',
                author : 'Dan Brown',
                isbn : '0002'
            }
        ];

        const books = storedBooks
        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector('#book-list');
        

    }
}
//storage

//event to add a book

//event to display a book

//event to remove a book