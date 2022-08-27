import controller from '../controllers';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { ApolloError } from 'apollo-server-express';
import bcrypt from 'bcrypt';

dotenv.config();
const SECRET = process.env.JWT_SECRET || "JWT_SECRET";

const resolvers = {
    Query: {
        viewer: async (parent: any, args: any, context: any) => {
            if (!context) return null;
            const userId = context.verify.userId;
            try {
                const viewer = await controller.User.findById({ id: userId });
                return viewer;
            } catch (error) {
                console.log(error);
            }
        },
        getUserById: async (parent: any, args: any) => {
            try {
                const user = await controller.User.findById(args);
                return user;
            } catch (error) {
                console.log(error);
            }
        },
        getIngredientById: async (parent: any, args: any) => {
            try {
                const ingredient = await controller.Ingredient.findById(args);
                return ingredient;
            } catch (error) {
                console.log(error);
            }
        },
        getRecipeById: async (parent: any, args: any) => {
            try {
                const recipe = await controller.Recipe.findById(args);
                return recipe;
            } catch (error) {
                console.log(error)
            }
        }
    },
    Mutation: {
        loginUser: async (parent: any, args: any) => {
            try {
                const user = await controller.User.login(args);
                if (!user) throw new ApolloError('User not found');
                if (user && !(await bcrypt.compare(args.password, user.password))) throw new ApolloError('Password is incorrect');
                if (user && (await bcrypt.compare(args.password, user.password))) {
                    const token = jwt.sign(
                        { userId: user._id },
                        SECRET,
                        { algorithm: "HS256", expiresIn: "1d" }
                    );
                    const userWithToken = {
                        _id: user._id,
                        username: user.username,
                        email: user.email,
                        token: token
                    };
                    return userWithToken;
                };
            } catch (error) {
                console.log(error);
            }
        },
        createUser: async (parent: any, args: any) => {
            const encryptedPW = await bcrypt.hash(args.password, 10);
            const newArgs = {
                username: args.username,
                email: args.email.toLowerCase(),
                password: encryptedPW
            }
            try {
                const createdUser = await controller.User.create(newArgs);
                if (createdUser) { 
                    const token = jwt.sign(
                        { userId: createdUser._id },
                        SECRET,
                        { algorithm: "HS256", expiresIn: "1d" }
                    );
                    const userWithToken = {
                        _id: createdUser._id,
                        username: createdUser.username,
                        email: createdUser.email,
                        token: token
                    };
                    return userWithToken;
                }
            } catch (error) {
                console.log(error);
            }
        },
        updateUser: async (parent: any, args: any) => {
            try {
                const updatedUser = await controller.User.update(args);
                return updatedUser;
            } catch (error) {
                console.log(error);
            }
        },
        deleteUser: async (parent: any, args: any) => {
            try {
                const deletedUser = await controller.User.delete(args);
                return deletedUser;
            } catch (error) {
                console.log(error);
            }
        },
        createIngredient: async (parent: any, args: any) => {
            console.log(args);
            try {
                const createdIngredient = await controller.Ingredient.create(args);
                return createdIngredient;
            } catch (error) {
                console.log(error);
            }
        },
        updateIngredient: async (parent: any, args: any) => {
            console.log(args);
            try {
                const updatedIngredient = await controller.Ingredient.update(args);
                return updatedIngredient;
            } catch (error) {
                console.log(error);
            }
        },
        deleteIngredient: async (parent: any, args: any) => {
            try {
                const deletedIngredient = await controller.Ingredient.delete(args);
                return deletedIngredient;
            } catch (error) {
                console.log(error);
            }
        },
        createRecipe: async (parent: any, args: any) => {
            try {
                const createdRecipe = await controller.Recipe.create(args);
                return createdRecipe;
            } catch (error) {
                console.log(error);
            }
        },
        updateRecipe: async (parent: any, args: any) => {
            try {
                const updatedRecipe = await controller.Recipe.update(args);
                return updatedRecipe;
            } catch (error) {
                console.log(error);
            }
        },
        deleteRecipe: async (parent: any, args: any) => {
            try {
                const deletedRecipe = await controller.Recipe.delete(args);
                return deletedRecipe;
            } catch (error) {
                console.log(error);
            }
        }
    },
    User: {
        ingredients: async (parent: any, args: any, context: any) => {
            try {
                const usersIngredients = await controller.Ingredient.findByUser({ userId: parent._id });
                return usersIngredients;
            } catch (error) {
                console.log(error);
            }
        },
        recipes: async (parent: any, args: any, context: any) => {
            try {
                const usersRecipes = await controller.Recipe.findByUser({ userId: parent._id });
                return usersRecipes;
            } catch (error) {
                console.log(error);
            }
        }
    },
    Recipe: {
        ingredients: async (parent: any, args: any, context: any) => {
            const ingredientIds = parent.ingredients;
            try {
                const recipeIngredients = await controller.Ingredient.findAllByIds({ ingredientIds });
                return recipeIngredients;
            } catch (error) {
                console.log(error);
            }
        }
    }
}

export default resolvers;