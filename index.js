require('dotenv').config();
const {ApolloServer } = require ('apollo-server');
const mongoose = require('mongoose');

const MONGODB = process.env.MONGODB_CONNECTION

const typeDefs = require('./graphql/typeDefs');

//apollo server

// const typeDefs = require ('./graphql/typeDefs');
const resolvers = require ('./graphql/resolver');

const server = new ApolloServer ({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log("MongoDB connection successful");
        return server.listen({port: 5000});
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
    })