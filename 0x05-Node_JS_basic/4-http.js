// Script creating a small http server using the 'http' module

const http = require('http');

const PORT = 1245;
const HOST = 'localhost';

app = http.createServer((req, res) => {
    res.end('Hello Holberton School !');
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${PORT}:${PORT}\n`);
});

module.exports = app;
