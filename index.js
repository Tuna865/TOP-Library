const masterLibrary = []

const Book = (title, author, year, genre, pages) => {
    this.title = title
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.pages = pages;
}

const buyANewBook = (title, author, year, genre, pages) => {
    const book = new Book(title, author, year, genre, pages)
    masterLibrary.push(book)
}

masterLibrary.forEach((book)=>{
    const bookDisplay = document.createElement("div")
    book = bookDisplay
})

