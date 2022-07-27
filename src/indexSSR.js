import React from 'react';
import './index.css';
import App from './App';

function IndexSSR(props) {
    const { renderMode } = props
    return (<App renderMode={renderMode} />);
}

export default IndexSSR;