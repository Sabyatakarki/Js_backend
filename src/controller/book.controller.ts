// import { Request,Response } from "express";
// import {z} from "zod";
// import {CreateBookDTO} from "../dtos/book.dto";
// import {Book} from "../types/book.type";
// import { BookService } from "../services/book.service";
// let bookService = new BookService()

// // export const BookSchema=z.object({
// //     id:z.string().min(1,{message:'ID is required'}),
// //     title:z.string().min(1,{message:'Title is required'}),
// //     date:z.string().optional(),
// // });
// // //DTO= Data Transfer Object
// // //iNPUT/output structure

// // export const CreateBookDTO = BookSchema.pick({id:true,title:true});
// // export type CreateBookDTO=z.infer<typeof CreateBookDTO>;

// // export type Book={
// //     id:string;
// //     title:string;
// //     date?:string;
// // }
// // export type Book=z.infer<typeof BookSchema>;

// let books:Book[]=[
//     {id:'B-1',title:'andriod'},
//     {id:'B-2',title:'ios',date:'2023-01-01'},
// ];

// // export class BookController{
// //     createBook(req:Request,res:Response){
// //         try{
// //               const parsedBook=CreateBookDTO.safeParse(req.body);
// //         if(!parsedBook.success){
// //             return res.status(400).json({errors:parsedBook.error});
// //         }

// //         const{id,title}=parsedBook.data;
// //         const newBook:book=BookService.createBook({id,title});
// //         return res.status(202).json(newBook);

// //         }catch{error:Error | any}{
// //             return res.status(500).send(error.message ?? "Internal service error")
// //         }
    
      
        
//         //destructuring
//         //let example={
//         //id:'B-3'
//         //}
//         //const {id}=example;//id='B-3'

//         // if(!title){
//         //     return res.status(400).json({message:'Title is required'});
//         // }
//         // if(!id){
//         //     return res.status(400).json({message:'ID is required'});
//         // }
//         // const checkId:boolean=books.some((book:Book)=>book.id===id);
//         // if(checkId){
//         //     return res.status(409).json({message:'Book with this ID already exists'});
//         // }

//         // const newBook:Book={id,title};
//         // //is same key and varible eg:{id:id,tittle:tittle}
//         // books.push(newBook);
//         // return res.status(201).json({message:'Book created successfully'});
    
// export class BookController {
//     createBooks(req: Request, res: Response) {
//         try {
//             const parsedBook = CreateBookDTO.safeParse(req.body);
//             //auto validation
//             if (!parsedBook.success) {
//                 return res.status(400).json({ errors: parsedBook.error });
//             }
//             const { id, title } = parsedBook.data;
//             const newBook: Book = bookService.createBook({ id, title });
//             return res.status(201).json(newBook);
//         } catch (error: Error | any) {
//             return res.status(500).send(error.message ?? "Internal Server Error");
//         }

//     }
//     getBooks(req:Request,res:Response){
//         const requestedBooks:Book[]=bookService.getAllBook();
//         return res.status(200).json(requestedBooks)
//     }
// }