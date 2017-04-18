/**
 * Created by usamaahmed on 4/11/17.
 */
require('dotenv/config');

if (process.env.server === 'local') {
    console.log('from local');
    const route = 'http://learn-graph-api.dev/api/';
    module.exports = {
        route
    };
}

if (process.env.server === 'production') {
    console.log('from production');
    const route = 'http://learn-graph-api.ideasowners.net/api/';
    module.exports = {
        route
    };
}

