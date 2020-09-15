
# ApacheCon Slides

Slides for ApacheCon

## Technology Used

The slides are generated from [asciidoctor](https://asciidoctor.org) markup and displayed with [reveal.js](https://asciidoctor.org/docs/asciidoctor-revealjs/). This means the content can be kept under version control and exported to a number of formats other than HTML.

## How to Build with Ruby or Node (minimal support)

It possisble to genrate the slides with other technologies, please see instructions at https://asciidoctor.org/docs/asciidoctor-revealjs/.

For node install the dependacies:

`npm i`

To generate the slides via:

`npm run build`

To serve the slides via:

`npm run serve`

To serve the slides and watch changes, run:

`npm start`

Some of the assets will need to be moved and the apachecon.css theme included in the HTML.

If you add ?print-pdf at the end of the URL, you can then print the slide deck into a PDF document.

TIP: use decktape to render them as PDF.

## Helpful Key Shortcuts

Some key shortcuts that may help you give a presentation:

- Cursor keys and space can navigate the slides.
- Press S will show speaker notes and a timer in a separate window.
- Press F for full screen.
- Press N for next slide or P for previous slide.
- Press O (for overview) will show a slide map / overview.
- Press B will black the screen.
