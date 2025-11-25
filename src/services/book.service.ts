import { CreateBookDTO } from "../dtos/book.dto";
import { Book } from "../types/book.type"
import { BookRepository, IBookRepository } from "../repositories/book.repository";

let bookRepository: IBookRepository = new BookRepository();

export class BookService {
    createBook(bookData: CreateBookDTO){
        //buisness logic
        const exit = bookRepository.findBookById(bookData.id);
        if(exit){
            throw new Error('Book with this ID already exists');
        }
        const newBook: Book = {
            id: bookData.id,
            title: bookData.title
        };
        let created: Book = bookRepository.createBook(newBook);

        //latter transform/map
        //..
        return created;
    }
    getAllBook(): Book[] {
        let response: Book[] = bookRepository
            .getBooks()
            .map(
                (book) => {
                    return {
                        ...book,
                        title: book.title.toUpperCase()
                    }
                }

            );
        return response;
    }
}