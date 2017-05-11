# AVDEX — Autonomous Vehicles Data EXchange

## Run the app
First you need to download and install the development
version of the driver.

```bash
$ git clone https://github.com/bigchaindb/js-bigchaindb-driver.git
$ cd js-bigchaindb-driver
$ npm install
$ npm run build
```

Then you can install the dependencies for the web application.

```bash
$ npm install
$ npm link ../js-bigchaindb-driver
$ npm start
```

Note: there are some problems using `yarn` to install `sematic-ui-react`,
this is a known bug. Please use `npm` instead.
