// Script creating a small http server using the 'http' module

const countStudent = require('./3-read_file_async');
const http = require('http');

app = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
	res.writeHead(200, {'content-type': 'text/plain'});
	res.end('Hello Holberton School !');
    }
    
    if (req.url === '/students' && req.method === 'GET') {
	res.writeHead(200, {'content-type': 'text/plain'});
	res.end('This is the list of our students', countStudent(process.argv[2]));
    }
});

app.listen(1245);

module.exports = app;
