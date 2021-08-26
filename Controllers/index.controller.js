import * as BookController from "./Book.controller.js";
import * as AuthorController from "./Author.controller.js";
import * as CategoryController from "./Category.controller.js";

const controllers = {
    ...BookController,
    ...AuthorController,
    ...CategoryController,
};

export default controllers;