import {gql} from 'apollo-server-express';

const typeDefs = gql`
    type Book{
        _id: ID,
        name: String,
        price: Int,
        author: Author
    }

    type Author{
        _id: ID,
        name: String,
        age: Int,
        books: [Book]
    }

    type Query{
        books: [Book],
        book (_id: String): Book
        authors: [Author],
        author (_id: String): Author
    }

    type Mutation{
        createBook (name: String, price: Int, authorId: String): Book,
        createAuthor(name: String, age: Int): Author,
    }
`

export default typeDefs;