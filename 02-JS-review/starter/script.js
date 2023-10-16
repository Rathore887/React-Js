const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: ["fantasy", "high-fantasy", "adventure", "fiction", "novels", "literature"],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: ["science fiction", "humor", "speculative fiction", "short stories", "fantasy"],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

/*
function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructing

const book = getBook(2);
// const title = book.title;
// const author = book.author;
// author;
// title;

const { title, author, genres } = book;
console.log(title);
console.log(genres);

// const primaryGenre = genres[1];
// const SeconaryGenre = genres[2];

const [primaryGenre, SeconaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, SeconaryGenre, otherGenres);

const newGenres = [...genres, "epic fantasy"];

newGenres;

const updatedBook = { book, moviePublication: "2001-12-19", pages: 1210 };
updatedBook;

// Sort curcuting

console.log(true && "Some string");
console.log(false && "some String");
console.log(hasMovieAdaption && "This book has a movie");

console.log("Jonas" && "Some string");
console.log(0 && "Some String");

console.log(true || "Some String");
console.log(false || "Some String");

// Optional Chaining
function getoalreviewCount(book) {
  const goodread = book.review.goodread.reviewsCount;  // if reviewCount not avaible then it
  // will give error to solve this problem we use optional chainig
  const librarything = book.review.librarything?.reviewsCount ?? 0; // if nothing then 0
  return goodread + librarything;
}

console.log(getoalreviewCount(book));

*/

/*
// map method
const books = getBooks();
// for example
const x = [1, 2, 3, 4, 5, 6].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
console.log(titles);

const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});

console.log(essentialData);

// filter method

const longBooks = books.filter((book) => book.pages > 500);
const longBooks2 = books.filter((book) => book.pages > 500).filter((book) => book.hasMovieAdaptation);
longBooks;
longBooks2;

const adventureBooks = books.filter((books) => books.genres.includes("adventure").map((book) => book.title));
adventureBooks;

// Reduce method

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
// intitialy acc is 0 that we have declare then iterate one by one and adding the values
pagesAllBooks;

// Array sort method

const arr = [3, 7, 1, 9, 6];
const sorted = arr.sort((a, b) => a - b); // a-b means ascending order
// const sorted = arr.sort((a, b) => b - a); // a-b means descending order
sorted;
// it will chnage the orginal array
// so store it and then use it

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

// immuable arrays

// Add book object to tarray
const newBook = {
  id: 6,
  title: "Harry potter and the chmber of secrets",
  author: "J>K Rowling",
};

const bookAfterAdd = [...books, newBook];
bookAfterAdd;

// Delete book object from array
const booksafterDelete = bookAfterAdd.filter((book) => book.id !== 3);
booksafterDelete;

// update book object in the array
const booksAfterUpdate = booksafterDelete.map((book) => (book.id === 1 ? {} : book));
booksAfterUpdate;

*/

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("Jonas");

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}
getTodos();
console.log("Hii");
