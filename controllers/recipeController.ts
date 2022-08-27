import db from '../models';

export default {
    findById: async (req: any) => {
        try {
            const request = await db.Recipe.findById({ _id: req.id });
            return request;
        } catch (error) {
            console.log(error);
        }
    },
    findByUser: async (req: any) => {
        try {
            const request = await db.Recipe.find({ userId: req.userId });
            return request;      
        } catch (error) {
            console.log(error)
        }
    },
    create: async (req: any) => {
        try {
            const request = await db.Recipe.create(req);
            return request;
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req: any) => {
        try {
            const request = db.Recipe.findOneAndUpdate({
                _id: req.id
            }, {
                title: req.title,
                video: req.video,
                instructions: req.instructions,
                ingredients: req.ingredients,
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
            const request = await db.Recipe.findOneAndDelete({ _id: req.id });
            return request;
        } catch (error) {
            console.log(error)
        }
    }
}