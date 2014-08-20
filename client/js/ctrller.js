 var app = angular.module('todoApp', []);
       app.controller("ctrller",function ($scope,$http) {
      //   $scope.todos = [
      //     {"name":"todo1","desc":"todo_desc1"},
      //     {"name":"todo2","desc":"todo_desc2"},
      //     {"name":"todo3","desc":"todo_desc3"}
      //   ];
      
console.log('controller');
    $http.get('/api')
		.success(function(data) {
			$scope.todos = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
		
       });