require('./convert-slides');

const express = require('express');
const server = express(); // better instead
[
    'src/main/asciidoc/',
    'src/main/resources/images/',
    'src/main/theme/',
    'node_modules/reveal.js/',
    '.',
].forEach(it => server.use('/', express.static(it)));
server.get('/', (req, res) => res.redirect('/index_en.html'));

server.listen(4200);
console.log('http://localhost:4200');
