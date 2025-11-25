import {z} from "zod";


export const BookSchema = z.object ({
    // 1 means atleast 1 character 
    id: z.string().min(1,{message:"Id is required"}),
    title: z.string().min(1,{message:"Title is required"}),
    date: z.string().optional()
}); 

export type Book = z.infer<typeof BookSchema>;