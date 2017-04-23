/**
 * Created by usamaahmed on 4/11/17.
 */
require('dotenv/config');
const axios = require('axios');
const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLBoolean,
    GraphQLID,
    GraphScalar,
    GraphQLList,
    GraphQLNonNull
    } = graphql;
const UserType = require('./UserType');
const UserMetaType = require('./UserMetaType');
const ItemType = require('./ItemType');
//const cons = require('./constants');
const route = process.env.route;

const queries = new GraphQLObjectType({
    name: 'queries',
    fields: () => ({
        users: {
            type: new GraphQLList(UserType),
            resolve(parentValue) {
                return axios.get(`${route}user`).then(r => r.data).catch(e => console.log(e));
            }
        },
        user: {
            type: UserType,
            args: {id: {type: GraphQLID}},
            resolve(parentValue, args) {
                return axios.get(`${route}user/${args.id}`).then(r => r.data).catch(e=> console.log(e));
            }
        },
        user_meta: {
            type: UserMetaType,
            resolve(parentValue) {
                return parentValue.user_meta;
            }
        },
        items: {
            type: new GraphQLList(ItemType),
            resolve(parentValue) {
                return axios.get(`${route}item`).then(r => r.data).catch(e =>console.log(e));
            }
        },
        item: {
            type: ItemType,
            args: {id: {type: GraphQLInt}},
            resolve(parentValue, args) {
                return axios.get(`${route}item/${args.id}`).then(r => r.data).catch(e => console.log(e));
            }
        }
    })
});

module.exports = queries;