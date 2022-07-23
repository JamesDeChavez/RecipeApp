import controller from '../controllers';

const resolvers = {
    Query: {
        getAllUsers: async () => {
            try {
                const allUsers = await controller.User.findAll();
                return allUsers;
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
        getAllPosts: async () => {
            try {
                const allPosts = await controller.Post.findAll();
                return allPosts;
            } catch (error) {
                console.log(error);
            }
        },
        getPostById: async (parent: any, args: any) => {
            try {
                const post = await controller.Post.findById(args);
                return post;
            } catch (error) {
                console.log(error);
            }
        }
    },
    Mutation: {
        createUser: async (parent: any, args: any) => {
            try {
                const createdUser = await controller.User.create(args);
                return createdUser;
            } catch (error) {
                console.log(error);
            }
        },
        createPost: async (parent: any, args: any) => {
            try {
                const createdPost = await controller.Post.create(args);
                return createdPost;
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
        updatePost: async (parent: any, args: any) => {
            try {
                const updatedPost = await controller.Post.update(args);
                return updatedPost;
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
        deletePost: async (parent: any, args: any) => {
            try {
                const deletedPost = await controller.Post.delete(args);
                return deletedPost;
            } catch (error) {
                console.log(error);
            }
        }
    },
    User: {
        posts: async (parent: any, args: any, context: any) => {
            try {
                const userPosts = await controller.Post.findByUser({ userId: parent._id });
                return userPosts;
            } catch (error) {
                console.log(error);
            }
        }
    }
}

export default resolvers;