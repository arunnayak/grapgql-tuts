const graphql = require('graphql');
const _ = require('lodash');

const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLSchema
} = graphql;

// dummy data
var books = [
    {name: 'Name of the wind', genre: 'Fantasy', id: '1'},
    {name: 'The final empire', genre: 'Fantasy', id: '2'},
    {name: 'The Long earth', genre: 'Sci-Fi', id: '3'}
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: ( ) => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString},
        genre: { type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                // code to get data from db or other source
                return _.find(books, {id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});