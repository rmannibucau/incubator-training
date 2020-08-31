const render = require('./convert-slides');

const express = require('express');
const server = express();
server.get('/', (req, res) => res.redirect('/index_en.html'));
server.get('/render', (req, res) => {
    render.render();
    res.redirect('/index_en.html');
});
[
    'src/main/asciidoc/',
    'src/main/resources/images/',
    'src/main/theme/',
    'node_modules/reveal.js/',
    'node_modules/highlight.js/',
    '.',
].forEach(it => server.use('/', express.static(it)));

server.listen(4200);
console.log('http://localhost:4200');
