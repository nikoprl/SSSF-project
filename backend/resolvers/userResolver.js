import bcrypt from "bcrypt";
import User from "../models/userModel";
import { login } from "../utils/auth";

export default {
  Query: {
    user: async (parent, args, { user }) => {
      console.log("userResolver", user);
      // find user by id
      return await User.findById(args.id);
    },
    userByName: async (parent, args, { user }) => {
      console.log("userByNameResolver", args, user);
      // find user by username
      return await User.findOne({
        username: args.username
      });
    },
    login: async (parent, args, { req }) => {
      req.body = args;
      return await login(req);
    },
  },
  Mutation: {
    registerUser: async (parent, args) => {
      try {
        const userExits = await User.exists({ username: args.username });
        if (!userExits) {
          const hash = await bcrypt.hash(args.password, 12);
          const userWithHash = {
            ...args,
            password: hash,
          };
          const newUser = new User(userWithHash);
          const result = await newUser.save();
          return result;
        } else {
          throw new Error("User already exists");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
