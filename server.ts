import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { expressjwt } from 'express-jwt';
import jwt from 'jsonwebtoken';
import mongoose, { ConnectOptions } from 'mongoose';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import dotenv from 'dotenv';

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3001;
const SECRET = process.env.JWT_SECRET || "JWT_SECRET";

const app = express();

app.use(
    expressjwt({
        secret: SECRET,
        algorithms: ['HS256'],
        credentialsRequired: false
    })
);

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: ({ req }) => {
        const token = req.headers.authorization?.split(' ')[1];
        const verify = token ? jwt.verify(token, SECRET) : null;
        return ({ verify });
    }
});

async function startServer() {
    await server.start();
    server.applyMiddleware({ 
        app
    });
};

startServer();

mongoose.connect(`${MONGODB_URI}`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
} as ConnectOptions).then(() => {
    console.log('connected to DB');
}).catch((err) => {
    console.log(err);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});