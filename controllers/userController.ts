import db from '../models';

export default {
    findAll: async () => {
        try {
            const request = await db.User.find();
            return request;
        } catch (error) {
            console.log(error)
        }
    },
    findById: async (req: any) => {
        try {
            const request = await db.User.findById({ _id: req.id });
            return request;
        } catch (error) {
            console.log(error);
        }
    },
    create: async (req: any) => {
        try {
            const request = await db.User.create(req);
            return request;
        } catch (error) {
            console.log(error)
        }
    },
    update: async (req: any) => {
        try {
            const request = await db.User.findOneAndUpdate({
                _id: req.id
            }, {
                firstName: req.firstName,
                lastName: req.lastName
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
            const userToDelete = await db.User.findById({ _id: req.id });
            const request = await userToDelete?.remove();
            return request;
        } catch (error) {
            console.log(error);
        }
    }
}

