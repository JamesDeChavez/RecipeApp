import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    ingredients: [Ingredient]
    recipes: [Recipe]
    token: String
  }

  type Ingredient {
    _id: String
    name: String
    brand: String
    userId: ID
  }

  type Video {
    title: String
    thumbnail: String
    channel: String
    youtubeId: String
  }

  type Summary {
    action: String
    items: [String]
  }

  type IngredientForInstruction {
    name: String,
    amount: String
  }

  type Instruction {
    summary: Summary
    description: String
    ingredients: [IngredientForInstruction]
    time: String
  }

  type Recipe {
    _id: ID
    title: String
    video: Video
    ingredients: [Ingredient]
    instructions: [Instruction]
    userId: ID
  }

  input SummaryForStep {
    action: String
    items: [String]
  }

  input VideoInput {
    title: String
    thumbnail: String
    channel: String
    youtubeId: String
  }

  input IngredientForStep {
    name: String,
    amount: String
  }

  input InstructionInput {
    summary: SummaryForStep
    description: String
    ingredients: [IngredientForStep]
    time: String
  }

  type Query {
    viewer: User
    getUserById(id: ID): User
    getIngredientById(id: ID): Ingredient
    getRecipeById(id: ID): Recipe
  }

  type Mutation {
    loginUser(username: String, password: String): User
    createUser(username: String, email: String, password: String): User
    updateUser(id: ID, username: String, email: String): User
    deleteUser(id: ID): User
    createIngredient(name: String, brand: String, userId: ID): Ingredient
    updateIngredient(id: ID, name: String, brand: String): Ingredient
    deleteIngredient(id: ID): Ingredient
    createRecipe(title: String, video: VideoInput, ingredients: [ID], instructions: [InstructionInput], userId: ID): Recipe
    updateRecipe(id: ID, title: String, video: VideoInput, ingredients: [ID], instructions: [InstructionInput]): Recipe
    deleteRecipe(id: ID): Recipe
  }
`;

export default typeDefs;