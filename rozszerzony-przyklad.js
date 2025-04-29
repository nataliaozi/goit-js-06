const bookShelf = {
  authors: ["Collinn Hoover", "Ryan Green"],
  getAuthors() {
    //metoda, która zwróci nam listę autorów na półce( czyli w naszym obiekcie bookShelf)
    return this.authors; //'this.authors' oznacza ten obiekt czyli bookShelf i autorów w środku tego obiektu
  },
  addAuthor(authorName) {
    //metoda w obiekcie, która będzie dodawać nowego autora do istniejącej tablicy
    this.authors.push(authorName);
  },
};
console.log(bookShelf.getAuthors());
bookShelf.addAuthor("Rebecca Makkai");
console.log(bookShelf.getAuthors());
