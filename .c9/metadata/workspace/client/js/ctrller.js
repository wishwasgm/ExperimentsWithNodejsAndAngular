{"filter":false,"title":"ctrller.js","tooltip":"/client/js/ctrller.js","undoManager":{"mark":6,"position":6,"stack":[[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":28,"column":0}},"nl":"\n","lines":["//","// # SimpleServer","//","// A simple chat server using Socket.IO, Express, and Async.","//","var http = require('http');","var path = require('path');","","//var async = require('async');","//var socketio = require('socket.io');","var express = require('express');","","//","// ## SimpleServer `SimpleServer(obj)`","//","// Creates a new instance of SimpleServer with the following options:","//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.","//","var router = express();","var server = http.createServer(router);","//var io = socketio.listen(server);","","router.use(express.static(path.resolve(__dirname, 'client')));","","server.listen(process.env.PORT || 3000, process.env.IP || \"0.0.0.0\", function(){","  var addr = server.address();","  console.log(\"TODO server listening at\", addr.address + \":\" + addr.port);","});"]},{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":41}},"text":" var app = angular.module('todoApp', []);"},{"action":"insertText","range":{"start":{"row":0,"column":41},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":18,"column":0}},"lines":["       app.controller(\"ctrller\",function ($scope,$http) {","        // $scope.todos = [","        //   {\"name\":\"todo1\",\"desc\":\"todo_desc1\"},","        //   {\"name\":\"todo2\",\"desc\":\"todo_desc2\"},","        //   {\"name\":\"todo3\",\"desc\":\"todo_desc3\"}","        // ];","      ","console.log('controller');","     $http.get('/api')","\t\t.success(function(data) {","\t\t\t$scope.todos = data;","\t\t\tconsole.log(data);","\t\t})","\t\t.error(function(data) {","\t\t\tconsole.log('Error: ' + data);","\t\t});","\t\t"]},{"action":"insertText","range":{"start":{"row":18,"column":0},"end":{"row":18,"column":10}},"text":"       });"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":3}},"text":"// "},{"action":"insertText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":2}},"text":"//"},{"action":"insertText","range":{"start":{"row":10,"column":0},"end":{"row":10,"column":3}},"text":"// "},{"action":"insertText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":3}},"text":"// "},{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":3}},"text":"// "},{"action":"insertText","range":{"start":{"row":13,"column":0},"end":{"row":13,"column":3}},"text":"// "},{"action":"insertText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":3}},"text":"// "},{"action":"insertText","range":{"start":{"row":15,"column":0},"end":{"row":15,"column":3}},"text":"// "},{"action":"insertText","range":{"start":{"row":16,"column":0},"end":{"row":16,"column":3}},"text":"// "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":8},"end":{"row":2,"column":11}},"text":"// "},{"action":"removeText","range":{"start":{"row":3,"column":8},"end":{"row":3,"column":11}},"text":"// "},{"action":"removeText","range":{"start":{"row":4,"column":8},"end":{"row":4,"column":11}},"text":"// "},{"action":"removeText","range":{"start":{"row":5,"column":8},"end":{"row":5,"column":11}},"text":"// "},{"action":"removeText","range":{"start":{"row":6,"column":8},"end":{"row":6,"column":11}},"text":"// "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":6},"end":{"row":1,"column":8}},"text":"//"},{"action":"insertText","range":{"start":{"row":2,"column":6},"end":{"row":2,"column":9}},"text":"// "},{"action":"insertText","range":{"start":{"row":3,"column":6},"end":{"row":3,"column":9}},"text":"// "},{"action":"insertText","range":{"start":{"row":4,"column":6},"end":{"row":4,"column":9}},"text":"// "},{"action":"insertText","range":{"start":{"row":5,"column":6},"end":{"row":5,"column":9}},"text":"// "},{"action":"insertText","range":{"start":{"row":6,"column":6},"end":{"row":6,"column":9}},"text":"// "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":3}},"text":"// "},{"action":"removeText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":3}},"text":"// "},{"action":"removeText","range":{"start":{"row":10,"column":0},"end":{"row":10,"column":3}},"text":"// "},{"action":"removeText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":3}},"text":"// "},{"action":"removeText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":3}},"text":"// "},{"action":"removeText","range":{"start":{"row":13,"column":0},"end":{"row":13,"column":3}},"text":"// "},{"action":"removeText","range":{"start":{"row":14,"column":0},"end":{"row":14,"column":3}},"text":"// "},{"action":"removeText","range":{"start":{"row":15,"column":0},"end":{"row":15,"column":3}},"text":"// "},{"action":"removeText","range":{"start":{"row":16,"column":0},"end":{"row":16,"column":3}},"text":"// "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":1,"column":6},"end":{"row":1,"column":7}},"text":"/"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":1,"column":6},"end":{"row":1,"column":7}},"text":"/"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":15,"column":33},"end":{"row":15,"column":33},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":15,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1408486709367,"hash":"3d7462c785c36040858595bed6f1a10576be538c"}