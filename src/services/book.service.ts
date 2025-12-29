// import { CreateBookDTO } from "../dtos/book.dto";
// import { Book } from "../types/book.type";
// import { BookRepository, IBookRepository } from "../repositories/book.repository";

// let bookRepository: IBookRepository = new BookRepository();

// export class BookService {
//     createBook(bookData: CreateBookDTO): Book {
//         // business logic
//         const existing = bookRepository.findBookById(bookData.id);
//         if (existing) {
//             throw new Error("Book with this ID already exists");
//         }

//         const newBook: Book = {
//             id: bookData.id,
//             title: bookData.title,
//             date: bookData.date,
//         };

//         let created: Book = bookRepository.createBook(newBook);

//         // later transform/map if needed
//         return created;
//     }

//     getAllBook(): Book[] {
//         let response: Book[] = bookRepository
//             .getBooks()
//             .map((book) => {
//                 return {
//                     ...book,
//                     title: book.title.toUpperCase(), // transform title
//                 };
//             });

//         return response;
//     }
// }
