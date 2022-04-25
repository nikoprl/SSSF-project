import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schemas/index";
import resolvers from "./resolvers/index";
import dotenv from "dotenv";
import connectMongo from "./database/database";
import { checkAuth } from "./utils/auth";

dotenv.config();

(async () => {
  try {
    const conn = await connectMongo();
    if (conn) {
      console.log("Connected successfully.");
    } else {
      throw new Error("Database not connected");
    }

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: async ({ req }) => {
        if (req) {
          const user = await checkAuth(req);
          return { user, req };
        }
      },
    });

    const app = express();

    await server.start();

    server.applyMiddleware({ app });

    app.listen({ port: process.env.PORT || 4000 }, () => {
      console.log("DB URL=", process.env.DB_URL);
      console.log(
        `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
      );
    });
  } catch (e) {   
    console.log("server error: " + e.message);
    console.log("Stack trace: " + e.stack);
  }
})();
