const { mergeTypes } = require('merge-graphql-schemas');

const User = require('./User/');
const Broker = require('./Broker/');
const Oracle = require('./Oracle/');
const Asset = require('./Asset/');
const ChartData = require('./ChartData/');
const Deal = require('./Deal/');

const typeDefs = [
  User,
  Broker,
  Oracle,
  Asset,
  ChartData,
  Deal,
];

module.exports = mergeTypes(typeDefs, { all: true });