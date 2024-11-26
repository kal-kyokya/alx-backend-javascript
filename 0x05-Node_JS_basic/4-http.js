// Script creating a small http server using the 'http' module

const http = require('http');

app = http.createServer((req, res) => {
    res.end('Hello Holberton School !');
});

app.listen(1245);

module.exports = app;
