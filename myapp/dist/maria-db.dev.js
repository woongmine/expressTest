"use strict";

var maria = require('maria');

var connection = maria.createConnection({
  host: '14.55.249.14',
  post: 3307,
  user: 'woong',
  password: '95123',
  database: 'airfly'
});
module.exports = connection;