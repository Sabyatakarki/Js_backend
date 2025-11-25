import { Book } from "../types/book.type";

let books: Book[] = [
    { id: 'B-1', title: 'andriod' },
    { id: 'B-2', title: 'ios', date: '2023-01-01' },
];

export interface IBookRepository {
    createBook(book: Book): void;
    getBooks(): Book[];
    findBookById(id: string): Book | undefined;
}

export class BookRepository implements IBookRepository {
    createBook(book: Book): Book {
        books.push(book);
        return book;
    }
    getBooks(): Book[] {
        return books;
    }

    findBookById(id: string): Book | undefined {

        return books.find((book: Book) => book.id === id);

    }

}