import db from '../models';

export default {
    findById: async (req: any) => {
        try {
            const request = await db.Ingredient.findById({ _id: req.id });
            return request;
        } catch (error) {
            console.log(error);
        }
    },
    findByUser: async (req: any) => {
        try {
            const request = await db.Ingredient.find({ userId: req.userId })
            return request
        } catch (error) {
            console.log(error);
        }
    },
    findAllByIds: async (req: any) => {
        try {
            const request = await db.Ingredient.find({
                '_id': { $in: req.ingredientIds }
            });
            return request;
        } catch (error) {
            console.log(error)
        }
    },
    create: async (req: any) => {
        try {
            const request = await db.Ingredient.create(req);
            return request;
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req: any) => {
        try {
            const request = db.Ingredient.findOneAndUpdate({
                _id: req.id
            }, {
                name: req.name,
                brand: req.brand,
                userId: req.userId
            }, {
                new: true
            });
            return request;
        } catch (error) {
            console.log(error);
        }
    }, 
    delete: async (req: any) => {
        try {
            const request = await db.Ingredient.findOneAndDelete({ _id: req.id });
            return request;
        } catch (error) {
            console.log(error)
        }
    }
}