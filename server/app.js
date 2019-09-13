const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true // to trigger the console
}));

app.listen(4000, () => {
    console.log('app is listening on port 4000');
})
