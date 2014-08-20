
var http = require('http');
var path = require('path');
var mysql =  require('mysql');

var express = require('express');

var router = express();
var server = http.createServer(router);

var connection =  mysql.createConnection({
  	host : '127.0.0.1',
  	user : 'root',
  	password: 'root',
  	database: 'cad_dbo_us'
  });

router.get('/api', function (req, res) {
  //res.send('[{"name":"todo1","desc":"todo_desc1"},{"name":"todo2","desc":"todo_desc2"},{"name":"todo3","desc":"todo_desc3"}]');
  //connection.query(“use database1”);
  connection.connect(function(err, conn) {
    if(err) {
         console.log('MySQL connection error: ', err);
         process.exit(1);
    }

});
  var strQuery = 'select id as name, cuid as desc from campaign';	
  
  connection.query( strQuery, function(err, rows){
  	if(err)	{
  		throw err;
  	}else{
  		res.send( JSON.stringify(rows));
  	}
  });
  
  
});

router.use(express.static(path.resolve(__dirname, 'client')));

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("TODO server listening at", addr.address + ":" + addr.port);
});
