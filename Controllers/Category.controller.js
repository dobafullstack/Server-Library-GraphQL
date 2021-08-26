import Category from "../Models/Category.js";

export const CreateCategory = async (args) => await Category.create(args);

export const GetCategoryById = async (id) => await Category.findById(id);

export const GetAllCategory = async () => await Category.find();
