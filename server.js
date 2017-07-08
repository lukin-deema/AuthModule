const express = require('express');
const http = require('http');
const graphqlHTTP = require('express-graphql');
const {graphql} = require('graphql');
const {schema, root} = require('./server/graphqlSchema');

const app = express();
app.set('port', process.env.PORT || 8082);
app.use('/', express.static('public'));

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

// todo: how to config webpack-dev-server running from  /public route instead of /src for reducing index.html files
const server = http.createServer(app);
app.listen(8082, () => console.log('Now browse to localhost:8082/graphql'));
