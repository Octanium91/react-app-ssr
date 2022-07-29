import logo from './logo.svg';
import './App.css';
import {Helmet} from "react-helmet";

function App() {
  console.log("render mode:", !!((typeof window !== "undefined" && window.document && window.document.createElement))?"SPA":"SSR")
  return (
    <div className="App">
      <header className="App-header">
        {/*Meta tags*/}
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8"/>
          <link rel="icon" href="/favicon.ico"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="theme-color" content="#000000"/>
          <link rel="apple-touch-icon" href="/logo192.png"/>
          <link rel="manifest" href="/manifest.json" />
          <meta name="description" content="React App + SSR" />
          <title>React App Example</title>
        </Helmet>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
