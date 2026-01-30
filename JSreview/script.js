const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    // pages: 216,
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
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
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

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//数组的解构 Destructuring
const book = getBook(2);
book;
// const title = book.title;
// const author = book.author;
// title;
// author;

//用对象数组装入选择的数据
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;

console.log(author, title, genres);

// const primaryGenre = genres[0];  //取数组的第一个元素索引
// const secondGenre = genres[1];  //取数组的第一个元素索引

// const [primaryGenre, secondGenre] = genres;

//扩展运算符
const [primaryGenre, secondGenre, ...otherGenres] = genres;


console.log(primaryGenre, secondGenre, otherGenres);

const newGenres = ['epic fantasy', ...genres,];
newGenres;

const updatedBook = {
  ...book,
  // Adding a new property
  moviePulicationDate: '2001-12-29',

  // Overwritng an.existing property
  pages: 1210,

};
updatedBook;

// Arrow function 箭头函数
// function getYear(str) {
//   return str.split("-")[0];
// }

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));



//JavaScript的模板字符串
//普通 javascript 字符串使用""
// const summary = 'abc';
const summary = `${title}, a ${pages}-pages long book, was written by ${author} 
and published in ${getYear(publicationDate.split("-")[0])}. 
The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;
summary;

//控制流  三元运算符
const pagesRange = pages > 1000 ? 'over a thousand' : 'less than 1000';
pagesRange;
console.log(`The book has ${pagesRange} pages`);

//逻辑运算符
//三目运算符的短路
console.log(true && "Some string");
console.log(false && "Some string");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy:0, '', null, 
console.log('wangyukun' && "Some string");
console.log(0 && "Some String");

console.log(true || "Some string");
console.log(false || "Some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATION";
spanishTranslation;

//可能会出错的情况
console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "NO DATA❎";
countWrong;
//因为短路，实际上是有数据的（id为 2 的阅读数据为 0，不应该显示无数据），但是用短路运算符就很容易出现这种错误

//为了修复这个错误，JS 引入了一个新的运算符

const count = book.reviews.librarything.reviewsCount ?? "NO DATA❎";
count;