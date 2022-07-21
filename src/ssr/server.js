import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import { matchPath } from "react-router-dom";
import IndexSSR from '../../src/IndexSSR';
import {Helmet} from "react-helmet";

const PORT = process.env.PORT || 3006;
const app = express();

const routes = ['/']

app.use(express.static('./.ssr-server-cache'))

app.get('*', (req, res, next) => {
    const activeRoute = routes.find((route) => matchPath(req.url, route))

    if (activeRoute) {
        const clientScript = `<script src="/client.js" defer></script>`
        const app = ReactDOMServer.renderToString(
            <StaticRouter location={req.url}>
                <IndexSSR/>
            </StaticRouter>
        );
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
            // shtml = shtml.replace(`<script ssr="client.js"></script>`, clientScript.toString())

            return res.send(
                shtml.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
            );
        });
    } else {
        next()
    }
});

app.use(express.static('./build'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});