/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const asciidoctor = require('@asciidoctor/core')()
const asciidoctorRevealjs = require('@asciidoctor/reveal.js')
const options = {
    safe: 'safe',
    backend: 'revealjs',
    templateDir: 'asciidoctor-reveal.js-',
    attributes: {
        imagesDir: 'src/main/resources/images',
        revealjs_customtheme: 'apachecon.css',
        'revealjs_transition': 'linear',
        'revealjs_slidenumber': true,
        'revealjs_history': true,
        'source-highlighter': 'highlightjs',
        'title-slide-background-image': 'ApacheCon_bg.jpg',
        'highlightjs-theme': 'styles/github.css',
        'icons': 'font',
    },
};

asciidoctorRevealjs.register();
const render = () => asciidoctor.convertFile('src/main/asciidoc/index_en.adoc', options);

render();

module.exports.render = render;
