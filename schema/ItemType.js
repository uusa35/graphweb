/**
 * Created by usamaahmed on 4/11/17.
 */
const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLEnumType,
    GraphQLSchema,
    GraphQLBoolean,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    } = graphql;

const TYPES = {
    product: "product",
    service: "service",
    branch: "branch",
    contractor: "contractor",
    agency: "agency",
    manufacturer: "manufacturer"
}

const ItemType = new GraphQLObjectType({
    name: 'item',
    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        user_id: {type: GraphQLInt},
        category_id: {type: GraphQLInt},
        type: {type: GraphQLString},
        updated_at: {type: GraphQLString},
        created_at: {type: GraphQLString}
    })
});

module.exports = ItemType;