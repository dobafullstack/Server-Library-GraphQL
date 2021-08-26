import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Book {
        _id: ID
        name: String
        price: Int
        author: Author
        category: Category
    }

    type Author {
        _id: ID
        name: String
        age: Int
        books: [Book]
    }

    type Category {
        _id: ID
        name: String
    }

    type Query {
        books: [Book]
        book(_id: String): Book
        authors: [Author]
        author(_id: String): Author
        categories: [Category]
        category(_id: String): Category
    }

    type Mutation {
        createBook(name: String!, price: Int, authorId: String!, categoryId: String!): Book
        createAuthor(name: String, age: Int): Author,
        createCategory(name: String): Category,
    }
`;

export default typeDefs;
