import { Schema, model } from 'mongoose';

const ingredientSchema = new Schema ({
    name: {type: String, required: true},
    brand: {type: String, required: false},
    userId: {type: String, required: false}
}, {
    collection: "Ingredient"
});

const Ingredient = model('Ingredient', ingredientSchema);

export default Ingredient;