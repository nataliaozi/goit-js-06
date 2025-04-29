// Tworzę obiekt, który będzie reprezentował osobę
const osoba = {
  username: "Maciej", //właściwośc obiektu: imię osoby
  showName() {
    //metoda showName będzie pokazywac imię w konsoli (metoda to czynność, którą dana osoba może wykonać)
    console.log(this.username); //'this' odnosi się do obiektu osoba a this.username oznacza "weź właściwość username z tego obiektu"
  },
};

// Testuję metodę showName więc wywołujemy metodę. Inaczej mówiąc, mówimy: Obiekcie Osoba, pokaż swoje imię!""
osoba.showName(); // Wypisze po prostu Maciej
