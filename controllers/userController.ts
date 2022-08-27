import db from '../models';

export default {
    login: async (req: any) => {
        try {
            const request = await db.User.find({username: req.username});
            return request[0];
        } catch (error) {
            console.log(error);
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
            console.log(error);
        }
    },
    update: async (req: any) => {
        try {
            const request = await db.User.findOneAndUpdate({
                _id: req.id
            }, {
                username: req.username,
                email: req.email
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
            const request = await db.User.findOneAndDelete({ _id: req.id });
            return request;
        } catch (error) {
            console.log(error);
        }
    }
}

