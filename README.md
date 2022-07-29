
## SSR integration in your React app

ReactJS: `18`, Webpack: `5`

Dependencie:
`yarn add express react-helmet` or `npm install express react-helmet`

devDependencies:
`yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader copy-webpack-plugin css-loader nodemon npm-run-all url-loader webpack webpack-cli webpack-node-externals --dev` or
`npm install @babel/core @babel/preset-env @babel/preset-react babel-loader copy-webpack-plugin css-loader nodemon npm-run-all url-loader webpack webpack-cli webpack-node-externals mini-css-extract-plugin --save-dev`

Files: `.babelrc.json, webpack.build.js, webpack.server.js`

Folder: `./src/ssr`

Scripts: `ssr:start:build-server, ssr:start:run, ssr:start, ssr:build:server, ssr:build`

TIP: use `Helmet` for set meta data

## Available Scripts

In the project directory, you can run:

### `npm run ssr:start`

Runs the app in the server side rendering in development mode.\
Open [http://localhost:3006](http://localhost:3006) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run ssr:build`

Builds the app (server side rendering) for production to the `build-ssr` folder, app port `80`.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
