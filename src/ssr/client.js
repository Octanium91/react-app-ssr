import React from "react";
import { hydrateRoot } from 'react-dom/client';
import IndexSSR from "../indexSSR";

hydrateRoot(document.getElementById('root'),
    <React.StrictMode>
        <IndexSSR renderMode={"SPA"} />
    </React.StrictMode>)