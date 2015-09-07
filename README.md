Create the config file
`cp config.json.sample config.json`

Add the configuration to config.json

Install the dependancies
`npm install`

Build the javascript package
`browserify ./src/index.js > ./web/js/main.js`

Start the server
`npm run start`