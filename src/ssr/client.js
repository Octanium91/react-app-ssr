import React from "react";
import { hydrateRoot } from 'react-dom/client';
import IndexSSR from "../indexSSR";

hydrateRoot(document.documentElement,
    <React.StrictMode>
        <IndexSSR />
    </React.StrictMode>)