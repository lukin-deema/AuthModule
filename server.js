const express = require('express');
const http = require('http');

const app = express();
app.set('port', process.env.PORT || 8082);
app.use('/', express.static(__dirname+'/public'));

const server = http.createServer(app);

server.listen(app.get('port'), function () {
    console.log('Server listening on port ' + server.address().port);
});

module.exports = server;
