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


const UserMetaType = new GraphQLObjectType({
    name: 'user_meta',
    fields: () => ({
        id: {type: GraphQLInt},
        logo: {type: GraphQLString},
        establishment_year: {type: GraphQLString},
        legal_structure: {type: GraphQLString},
        registered_address: {type: GraphQLString},
        registered_phone: {type: GraphQLString},
        registered_fax: {type: GraphQLString},
        fax: {type: GraphQLString},
        phone: {type: GraphQLString},
        website: {type: GraphQLString},
        contact_name: {type: GraphQLString},
        contact_number: {type: GraphQLString},
        contact_designation: {type: GraphQLString},
        contact_email: {type: GraphQLString},
        contact_card_url: {type: GraphQLString},
        description: {type: GraphQLString},
        organization_chart: {type: GraphQLString},
        employees_number: {type: GraphQLString},
        catalogue: {type: GraphQLString},
        another_address: {type: GraphQLString},
        another_number: {type: GraphQLString},
        another_fax: {type: GraphQLString},
        cv_pdf: {type: GraphQLString},
        birth_date: {type: GraphQLString},
        designation: {type: GraphQLString},
        past_designation: {type: GraphQLString},
        spoken_languages: {type: GraphQLString},
        user_id: {type: GraphQLString},
        created_at: {type: GraphQLString},
        updated_at: {type: GraphQLString},
    })
});

module.exports = UserMetaType;
