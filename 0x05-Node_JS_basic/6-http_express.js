// Script creating a small http server using Express

const express = require('express');

app = express();

app.get('/', (req, res) => {
    res.end('Hello Holberton School !');
})

app.listen(1245);
