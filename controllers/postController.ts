import db from '../models';

export default {
    findAll: async () => {
        try {
            const request = await db.Post.find();
            return request;
        } catch (error) {
            console.log(error);
        }
    },
    findById: async (req: any) => {
        try {
            const request = await db.Post.findById({ _id: req.id });
            return request;
        } catch (error) {
            console.log(error);
        }
    },
    findByUser: async (req: any) => {
        try {
            const request = await db.Post.find({ authorId: req.userId });
            return request;
        } catch (error) {
            console.log(error);
        }
    },
    create: async (req: any) => {
        try {
            const request = await db.Post.create(req);
            return request;
        } catch (error) {
            console.log(error)
        }
    },
    update: async (req: any) => {
        try {
            const request = await db.Post.findOneAndUpdate({
                _id: req.id
            }, {
                body: req.body,
                authorId: req.authorId
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
            const postToDelete = await db.Post.findById({ _id: req.id });
            const request = await postToDelete?.remove();
            return request;
        } catch (error) {
            console.log(error);
        }
    }
}