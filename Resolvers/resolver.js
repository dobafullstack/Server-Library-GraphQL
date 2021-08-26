const resolvers = {
    Query: {
        books: async (parent, args, { controllers }) =>
            await controllers.GetAllBooks(),
        book: async (parent, args, { controllers }) =>
            controllers.GetBookById(args._id),
        authors: async (parent, args, { controllers }) =>
            await controllers.GetAllAuthor(),
        author: (parent, args, { controllers }) =>
            controllers.GetAuthorById(args._id),
    },
    Book: {
        author: async (parent, args, { controllers }) =>
            controllers.GetAuthorByBookAuthorId(parent.authorId),
    },
    Author: {
        books: async (parent, args, { controllers }) =>
            controllers.GetBooksByAuthorId(parent._id),
    },
    Mutation: {
        createBook: async (parent, args, { controllers }) =>
            await controllers.CreateBook(args),
        createAuthor: async (parent, args, { controllers }) =>
            await controllers.CreateAuthor(args),
    },
};

export default resolvers;
