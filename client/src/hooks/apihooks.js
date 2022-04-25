const fetchGraphql = async (query) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(query),
  };
  try {
    console.log(options);
    const response = await fetch("http://localhost:4000/graphql", options);
    const json = await response.json();
    return json.data;
  } catch (e) {
    console.log(e);
    return false;
  }
};

const registerUser = async (username, password) => {
  const query = {
    query: `
      mutation RegisterUser($username: String!, $password: String!) {
        registerUser(username: $username, password: $password) {
          id
          username
          token
          password
        }
      }`,
    variables: { username, password },
  };
  const data = await fetchGraphql(query);
  return data.registerUser;
};

const getUser = async (username) => {
  const query = {
    query: `{
        query UserByName($username: String!) {
          userByName(username: $username) {
            id
            username
          }
        }
      }`,
    variables: { username },
  };
  const data = await fetchGraphql(query);
  return data.registerUser;
};

const getRecipes = async () => {
  const query = {
    query: `
       {
        recipes {
          id
          title
          description
          ingredients
          time
          author
        }
      }
      `,
  };
  const data = await fetchGraphql(query);
  console.log("recipes:",data.recipes)
  return data;
};

const getRecipeById = async (recipeId) => {
  const query = {
    query: `
      query Recipe($recipeId: ID!) {
        recipe(id: $recipeId) {
          id
          title
          description
          ingredients
          time
          author
        }
      }
    `,
    variables: { recipeId },
  };
  const data = await fetchGraphql(query);
  console.log("recipes:",data.recipe)
  return data.recipe;
}
/*default */
export {  registerUser, getUser, getRecipes,getRecipeById };
