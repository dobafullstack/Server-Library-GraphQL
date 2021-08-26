import Author from "../Models/Author.js";

export const CreateAuthor = async (args) => {
    return await Author.create(args);
};

export const GetAllAuthor = async () => await Author.find();

export const GetAuthorById = async (id) => await Author.findById(id);

export const GetAuthorByBookAuthorId = async (authorId) => await Author.findById(authorId)
