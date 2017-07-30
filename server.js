const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
app.set('port', process.env.PORT || 8082);
app.use(bodyParser.json({ limit: '10mb' }));


app.use('/api', require('./server/routes'));
app.use('/', express.static('public'));

const server = http.createServer(app);

server.listen(app.get('port'), function () {
    console.log('Server listening on port ' + server.address().port);
});

module.exports = server;
