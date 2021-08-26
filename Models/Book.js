import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    authorId: String,
});

const Book = new mongoose.model("Book", bookSchema, "book");

export default Book;
