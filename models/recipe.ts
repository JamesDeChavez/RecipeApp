import { Schema, model } from 'mongoose';

const recipeSchema = new Schema ({
    title: {type: String, required: true},
    video: {
        title: {type: String, required: true},
        thumbnail: {type: String, required: true},
        channel: {type: String, required: true},
        youtubeId: {type: String, required: true}
    },
    ingredients: {type: Array, required: true},
    instructions: {type: Array, required: true},
    userId: {type: String, required: true}
}, {
    collection: "Recipe"
});

const Recipe = model('Recipe', recipeSchema);

export default Recipe;