var maria = require('mysql');
var connection = maria.createConnection({
    host: '14.55.249.14',
    port: 3307,
    user: 'woong',
    password: '95123',
    database: 'airfly'
});

module.exports = connection;