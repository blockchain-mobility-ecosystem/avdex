# AVDEX — Autonomous Vehicles Data EXchange

## Run the app

AVDEX uses a couple of [BigchainDB](https://github.com/bigchaindb/bigchaindb) features
that are not released yet. To run this software you'll need to point to some specific
commits both for the javascript driver and for the BigchainDB node.


### Install `bigchaindb`
The application requires some code that is not in a BigchainDB release yet.


```bash
$ git clone https://github.com/bigchaindb/bigchaindb.git
$ cd bigchaindb
$ git checkout 366fba64d753d3cca5958d0e6ef3711d37d3e42d
$ pip install -e .
```

### Install `js-bigchaindb-driver`

First you need to download and install the development
version of the driver.

```bash
$ git clone https://github.com/bigchaindb/js-bigchaindb-driver.git
$ cd js-bigchaindb-driver
$ git checkout 3f3efc92de2eceaf6aebd435e8d20203d2cb968c
$ npm install
$ npm run build
```

Then install the dependencies for the web application.

```bash
$ npm install
$ npm link ../js-bigchaindb-driver
$ npm start
```

Note: there are some problems using `yarn` to install `sematic-ui-react`,
this is a known bug. Please use `npm` instead.

## Authors
![image](http://static.tvtropes.org/pmwiki/pub/images/starskyhutchmovie.jpg)
