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

if (process.env.WATCH) {
    let ready = 0;
    const rerender = why => {
        if (ready < 2) {
            return;
        }
        render.render();
        console.log('Re-rendered slides: ' + why);
    };
    const chokidar = require('chokidar');
    ['src/main/asciidoc', 'src/main/resources/images'].forEach(folder =>
        chokidar
            .watch(`${folder}/**`, {
                persistent: true,
                ignored: '**/*.html',
                ignoreInitial: true,
            })
            .on('add', path => rerender(path + ' was added'))
            .on('change', path => rerender(path + ' changed'))
            .on('unlink', path => rerender(path + ' was deleted'))
            .on('ready', () => ready++));
    ready++;
}
