import { Router } from "express";
import {BookController} from "../controller/book.controller";

const router:Router =Router();
const bookController = new BookController();

router.get('/',bookController.getBooks);
//make a router thgat handdlesGet request tat takes bookid
//bookid and class book controller.getBookById

export default router;