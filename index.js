import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./Schemas/schema.js";
import resolvers from "./Resolvers/resolver.js";
import dotenv from "dotenv";
import connectDB from "./Configs/mongoose.js";
import controllers from './Controllers/index.controller.js'

dotenv.config();
connectDB();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({controllers})
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log("Now browse to http://localhost:4000" + server.graphqlPath)
);
