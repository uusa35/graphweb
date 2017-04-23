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
const cons = require('./constants');
const ItemType = require('./ItemType');
const UserType = require('./UserType');

const mutations = new GraphQLObjectType({
    name: 'mutation',
    fields: {
        ItemStore: {
            type: ItemType,
            args: {
                name: {type: GraphQLString},
                user_id: {type: GraphQLInt},
                category_id: {type: GraphQLInt},
                type: {type: GraphQLString}
            },
            resolve(parentValue, args){
                console.log(cons.route);
                return axios.post(cons.route + 'item/', args).then(r => r.data)
                    .catch(e => console.dir(e));
            }
        },
        ItemDelete: {
            type: ItemType,
            args: {
                id: {type: GraphQLInt}
            },
            resolve(parentValue, args) {
                return axios.delete(cons.route + `item/${args.id}`)
                    .then(response => response.data)
                    .catch(e => console.log(e));
            }
        },
        ItemEdit: {
            type: ItemType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLInt)},
                name: {type: GraphQLString},
                category_id: {type: GraphQLInt},
                user_id: {type: GraphQLInt},
                type: {type: GraphQLString}
            },
            resolve(parentValue, args) {
                return axios.patch(cons.route + `item/${args.id}`, args)
                    .then(response => response.data)
                    .catch(e => console.log(e))
            }
        },
        // will return the token if true
        authenticate: {
            type: GraphQLString,
            args: {
                email: {type: GraphQLString},
                password: {type: GraphQLString}
            },
            resolve(parentValue, args) {
                return axios.post(`${cons.route}auth`, args)
                    .then(r => r.data.token).catch(e => console.log(e));
            }
        },
        // will return the user if true
        authenticatedUser: {
            type: UserType,
            args: {token: {type: GraphQLString}},
            resolve(parentValue, args) {
                return axios.post(`${cons.route}auth/me`, {
                    headers: {'Authentication': 'Bearer ' + args.token},
                }).then(r => r.data).catch(e => console.log(e));

            }
        }
    }
});

module.exports = mutations;