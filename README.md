# GitHub Search Component

This project mainly include a search component that gets data from the GitHub user search API and show suggestions when user key-in values.


## How to clone the project and setup environment variables

- You need to clone the project into your local computer
- Move in to the project folder using the terminal
- Run `npm i` to install all the dependencies 
- Create a copy of `.env.sample` and rename it to `.env` 
- Now you are ready to execute below scripts

## Available Scripts

In the project directory, you can run:

### `yarn start`. or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test` or `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build` or `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Folder Structure

```
    ├── ...
    └── components              # react component files
    │   └── DropdownOptions     # dropdown options list
    │   ├── ...                 
    └── utils
    │   └──api.js               # API calls to fetch data
    │   └── style               # common styles and theme customizations
    │   ├── url.js              # url/parameter related reusable functions
    └── index.js                # Entry point of the application
    └── Dropdown.js             # Main Dropdown container
    └── .env                    # env variables for local & staging
```
