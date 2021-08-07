# Github Finder

This project was developed following Brad Traversy's "React Front to Back" course. The live application can be found [here](https://githubfinder2389746.netlify.app/)

This application was developed with React, using hooks and the Context API.

## Setup

To setup for local development, a `.env.local` file should be created in the root folder containing the following keys:

- REACT_APP_GITHUB_CLIENT_ID
- REACT_APP_GITHUB_CLIENT_SECRET

Obs: These keys can be generated in Github.

Run `npm install` to install the dependencies.
Execute `npm start` and the application will be available at `localhost:3000`

## Deploy

This application was deployed with [Netlify](https://www.netlify.com/) cli. Follow these steps to deploy:

1. `npm run build`
2. `./node_modules/.bin/netlify deploy --prod`
