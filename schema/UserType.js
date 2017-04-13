/**
 * Created by usamaahmed on 4/11/17.
 */
const axios = require('axios');
const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLBoolean,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
    } = graphql;
const UserMetaType = require('./UserMetaType');
const ItemType = require('./ItemType');

const UserType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        active: {type: GraphQLBoolean},
        user_meta: {
            type: UserMetaType,
        },
        items: {
            type: new GraphQLList(ItemType)
        }
    })
});

module.exports = UserType;