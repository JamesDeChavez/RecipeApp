import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import dotenv from 'dotenv';

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3001;

const app = express();
const server = new ApolloServer({ typeDefs, resolvers});

async function startServer() {
    await server.start();
    server.applyMiddleware({ app });
}

startServer();

mongoose.connect(`${MONGODB_URI}`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
} as ConnectOptions).then(() => {
        console.log('connected to DB');
    }).catch((err) => {
        console.log(err);
    })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});