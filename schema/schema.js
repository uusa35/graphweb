/**
 * Created by usamaahmed on 4/7/17.
 */
const graphql = require('graphql');
const {
    GraphQLSchema,
    } = graphql;
const mutations = require('./mutations');
const queries = require('./queries');


module.exports = new GraphQLSchema({
    query: queries,
    mutation : mutations
});