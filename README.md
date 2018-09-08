# tournament-bracket-manager
A simple manager for tournament brackets.

## Requirements
* [Node.js](https://nodejs.org)
* [MongoDB](https://www.mongodb.com)
* `npm install`

## Configuration
You can configure TBM in the `tbm.config.js`:
* `port` (number): The port on which TBM will be running. _(Default: `1337`)_
* `MongoDB`: Configurations concerning MongoDB
  * `server` (string): The server on which MongoDB is running. _(Default: `'localhost'`)_
  * `port` (number): The port on which MongoDB is running. _(Default: `27017`)_
  * `dbName` (string): The name of the database TBM should use. _(Default: `'tbm-db'`)_

## Development
### Build the client
`npm run build-client`
> (re)builds the client at changes on the client side

### Start the server
`npm start`
> starts the server

#### Optional
`npm run build-server` **(requires [Node Supervisor](https://www.npmjs.com/package/supervisor))**
> (re)starts the server at changes on the server side
