import mongoose from "mongoose";

const authorSchema = mongoose.Schema({
    name: String,
    age: Number,
});

const Author = new mongoose.model("Author", authorSchema, "author");

export default Author;
