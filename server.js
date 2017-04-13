const express = require('express');
const expressGraphQl = require('express-graphql');
const schema = require('./schema/schema');
//import { schema } from './dist/output';

const app = express();
app.use('/graphql', expressGraphQl({
    schema,
    graphiql: true
}));

app.listen('8080', function() {
    console.log('listening ..');
});

