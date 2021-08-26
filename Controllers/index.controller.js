import * as BookController from "./Book.controller.js";
import * as AuthorController from "./Author.controller.js";

const controllers = {
    ...BookController,
    ...AuthorController,
};

export default controllers;