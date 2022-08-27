import { User } from "./interfaces";
import { sampleIngredientsList } from "./sampleIngredientsList";
import { sampleRecipeList } from "./sampleRecipeList";


export const sampleUser: User = {
    username: 'FakeUsername',
    email: 'FakeEmail@gmail.com',
    password: 'fakepassword123!',
    recipes: sampleRecipeList,
    ingredients: sampleIngredientsList
};