# tournament-bracket-manager
A simple manager for tournament brackets.

## Requirements
* [Node.js](https://nodejs.org)
* [MongoDB](https://www.mongodb.com)
* `npm install`

## Configuration
> You can configure TBM in the `tbm.config.js`:
* `port` **(number)**: The port on which TBM will be running. *(default: `1337`)*
* `database` **(object)**: Configurations concerning your MongoDB database.
  * `server` **(string)**: The server on which your database is running. *(default: `'localhost'`)*
  * `port` **(number)**: The port on which your database is running. *(default: `27017`)*
  * `name` **(string)**: The name of the database TBM should use. *(default: `'tbm-db'`)*

## Start the server
`npm start`

## Developing
`npm run build-client`
> build the client once
---
`npm run watch-client`
> build the client at changes on the client side
---
`npm run watch-server` **(requires [Node Supervisor](https://www.npmjs.com/package/supervisor))**
> restart the server at changes on the server side
