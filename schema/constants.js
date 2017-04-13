/**
 * Created by usamaahmed on 4/11/17.
 */
require('dotenv/config');

if (process.env.server === 'local') {
    const route = 'http://learn-graph-api.dev/api/';
    module.exports = {
        route
    };
}

if (process.env.server === 'production') {
    const route = 'http://learn-graph-api.ideasowners.net/api/';
    module.exports = {
        route
    };
}

