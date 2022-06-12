var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var mariaDB = require('../maria-db');

router.get('/test', function (req, res, next) {
    mariaDB.query('SELECT A.p_no, A.j_no, A.journal_name FROM airfly.journalistinfo A LIMIT 1', function (err, rows, fields) {
        if (!err) {
            console.log(rows);
            console.log(fields);
            // var result = 'rows : ' + JSON.stringify(rows) + '<br><br>' +
            //     'fields : ' + JSON.stringify(fields);
            // res.send(result);
        } else {
            console.log('query error : ' + err);
            res.send(err);
        }
    });
    console.log("테스트");
    res.render('index', { title: 'TestPage', url: 'index' });
});

module.exports = router;