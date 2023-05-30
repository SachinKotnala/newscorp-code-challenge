# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Assumptions:

1- I have set up a fake server using json-server and populated it with mock data. However, since the API call does not support pagination, I retrieve the entire dataset and then slice it based on the pagination properties before returning the results. In a real scenario, the backend would handle the pagination logic.

2 - In the related field, there are two types of thumbnails: "thumbnail.default" and "primary.default." Each thumbnail has its own properties, such as dimensions. Since there was no specific information on which thumbnail to choose, I decided to select the first element within the "thumbnail.default" array. With more information, we could potentially perform calculations to determine which thumbnail ID would be suitable for our news tile.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `json-server --watch mockData.json --port 3030`

React utilizes the 3000 port, which json-server uses to run the server, thus we used — port 3030 to modify the port.
 we open http://localhost:3030/results on our browser, we can see our data.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

