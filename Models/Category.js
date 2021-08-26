import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

const Category = new mongoose.model("Category", categorySchema, "category");

export default Category;
