
interface Book {
    title: string;
    author: string;
    yearPublished: number;
    isFiction?: boolean;
}

let book1: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925
};

let book2: Book = {
    title: "1984",
    author: "George Orwell",
    yearPublished: 1949,
    isFiction: true
};

console.log(book1);
console.log(book2);

