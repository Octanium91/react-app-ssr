import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import IndexSSR from '../../../src/IndexSSR';
import {Helmet} from "react-helmet";

const PORT = process.env.PORT || 3006;
const app = express();

app.get('/', (req, res) => {
    const app = ReactDOMServer.renderToString(<IndexSSR />);
    const helmet = Helmet.renderStatic();

    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        let shtml = data
        shtml = shtml.replace(`<html lang="en">`, `<html ${helmet.htmlAttributes.toString()}>`)
        shtml = shtml.replace(`<title></title>`, helmet.title.toString())
        shtml = shtml.replace(`<meta name="h-meta"/>`, helmet.meta.toString())
        shtml = shtml.replace(`<meta name="h-link"/>`, helmet.link.toString())

        return res.send(
            shtml.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        );
    });
});

app.use(express.static('./build'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});