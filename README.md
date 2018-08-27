# Event Source Prototype

This is a new prototype for event sourcing using Node and Typescript

## Install

Install the node packages via:
```bash
$ npm install
```

And then run the grunt task to compile the TypeScript:
```bash
$ npm run grunt
```

## Prerequisites

The boilerplate utilises npm package `dotenv` so you will be required to create a `.env` file in the root of the app:
```bash
$ touch .env
```

...and put the variables:

* HOST=localhsot
* PORT=3000 _(ExpressJS default but can be whatever)_

Also, create a `storage` directory with files:

* `events.json`
* `streams.json`

Initialise each file with an empty array _(`[]`)_

## Starting

To start the server run:
```bash
$ npm start
```
