import Book from "../Models/Book.js";

export const GetAllBooks = async () => await Book.find();

export const GetBookById = async (id) => await Book.findById(id);

export const GetBooksByAuthorId = async (authorId) => {
    const books = await Book.find({ authorId });

    return books;
};

export const CreateBook = async (args) => {
    return await Book.create(args);
};
