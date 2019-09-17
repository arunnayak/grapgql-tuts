const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect('mongodb+srv://graphqlusr:Asdf1234@cluster0-w3h2u.mongodb.net/test?retryWrites=true&w=majority', mongooseOptions)
        .then(() => {
            console.log('connected to database');
        }, function(error){
            console.log('error connecting database');
            console.log(error);
        });

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true // to trigger the console
}));

app.listen(4000, () => {
    console.log('app is listening on port 4000');
})
