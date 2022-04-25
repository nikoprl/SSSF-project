import Recipe from "../models/recipeModel";

export default {
  Query: {
    recipe: async (parent, args) => {
      console.log("recipeResolver args:", args);
      // find recipe by id
      return await Recipe.findById(args.id);
    },
    recipes: async (parent,args) => {
        return await Recipe.find({});
    }
  },
  Mutation: {
    addRecipe: async (parent, args) => {
      try {
        const recipe = {
          ...args,
        };
        const newRecipe = new Recipe(recipe);
        const result = await newRecipe.save();
        return result;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
