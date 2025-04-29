// Zrozumienie koncepcji
console.log(
  "Słowo kluczowe 'this' w JS odnosi się do obiektu, do którego należy aktualnie wykonywana funkcja. W programowaniu obiektowym pozwala odwoływać się do właściwości i metod obiektu wewnątrz jego definicji. W metodach obiektów 'this' wskazuje na ten obiekt. W przypadku wyowałania funkcji globalnej (poza obiektem), 'this' wskazuje na obiekt globalny --> window w przeglądarce."
);

const person = {
  //Tworzę obiekt person, który ma w sobie imię oraz metodę, czyli jakąś czynność
  name: "Natalia", // imię jest właściwością obiektu
  sayHello() {
    //w tym przypadku osoba potrafi się przywitać
    console.log("Hello, I am " + this.name + "!"); //tutaj komputer mówi "Wypisz podany tekst"; aby wziąć imię użyto this.name, gdzie 'this' oznacza, ten obiket, który teraz coś robi
  }, // a ponieważ sayHello jest w obiekcie person, to this = person, a this.name oznacza --> weź mię z obiektu person czyli Natalia
};
person.sayHello(); //tu wywołuję metodę. Mówię hej person przywitaj się. Wówczas komputer wchodzi do metody sayHello i tam widzi this.name i wie, że this to person, więc this.name to Natalia

//'this' jest takim palcem wskazującym na obiekt, który coś robi. W tum konkretnym przypadku 'this' pokazuje na person a this.name to imię tej osoby
//dzięki temu możemy pisać uniwersalne metody, które będą działać dla różnych osób, nie tylko Natalii

const person1 = {
  name: "Natalia",
  hobby: "cycling",
  introduceYourself() {
    console.log(
      "Hi, my name is " + this.name + " and I like " + this.hobby + "."
    );
  },
};

const person2 = {
  name: "Andrew",
  hobby: "skiing",
  introduceYourself() {
    console.log(
      "Hi, my name is " + this.name + " and I like " + this.hobby + "."
    );
  },
};

person1.introduceYourself();
person2.introduceYourself();
//Utworzyłam dwie osoby. Każda z nich ma właściwości imię i hobby oraz metodę introduceYourself - czyli co mówią o sobie.
//W środku introduceYourself this.name-weź imię tej osoby oraz this.hobby - weź hobby tej osoby
//Gdy wywołujemy person1.introduceYourself() --> 'this' pokazuje na person1, więc this.name to Natalia, a this.hobby to cycling
//Gdy wywołujemy person2.introduceYourself() --> 'this' pokazuje na person2, więc this.name to Andrew, a this.hobby to skiing

//Każda osoba ma swoje własne dane (imię i hobby)
//Każda osoba używa tej samej metody przedstawiania się (introduceYourself), a dzięki 'this' działa ona indywidualnie dla każdego obiektu

//Zastosowanie 'this' do dwóch obiektów gdy jest jedna wspólna funkcja ale przedstawiona poza obiketami
function przedstawSie() {
  console.log("Hi my name is " + this.name + " and I like " + this.hobby + ".");
}
// Osoba 1
const person01 = {
  name: "Natalia",
  hobby: "cycling",
  przedstawSie: przedstawSie,
};

// Osoba 2
const person02 = {
  name: "Andrew",
  hobby: "skiing",
  przedstawSie: przedstawSie,
};

// Wywołanie
person01.przedstawSie();
person02.przedstawSie();

//funkcja na początku utworzona nic nie wie o konrektnych osobach, używa tylko this.name i this.hobby
//każdemu obiektowi przypisuję tę samą funkcję jako metodą (przedstawSie: przedstawSie)
//funkcja przedstawSie() jest tylko jedna, ale 'this' działa indywidualnie dla każdego obiektu
//dzięki temu nie trzeba pisac tej samej funkcji dwa razy --> oszczędność kodu
