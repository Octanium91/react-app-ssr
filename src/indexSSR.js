import React from 'react';
import './index.css';
import App from './App';

function IndexSSR() {
    return (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}

export default IndexSSR;