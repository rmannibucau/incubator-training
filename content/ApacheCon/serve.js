const render = require('./convert-slides');

const express = require('express');
const server = express();

const sources = [
    'src/main/asciidoc/',
    'src/main/resources/images/',
    'src/main/theme/',
    '.',
];

const useLiveReload = process.env.WATCH || false;
if (useLiveReload) {
    console.log('Enabling Livereload');
    server.use(require('easy-livereload')({
        watchDirs: sources,
        port: process.env.LIVERELOAD_PORT || 35729,
        checkFunc: file => file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.js'),
    }));
}

server.get('/', (req, res) => res.redirect('/index_en.html'));
server.get('/render', (req, res) => {
    render.render();
    res.redirect('/index_en.html');
});
[
    ...sources,
    'node_modules/reveal.js/',
    'node_modules/highlight.js/',
].forEach(it => server.use('/', express.static(it)));

const port = +(process.env.SLIDES_PORT || '4200');
server.listen(port);
console.log('Slides available at http://localhost:' + port);

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
