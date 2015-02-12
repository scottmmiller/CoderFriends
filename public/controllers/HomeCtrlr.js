var app = angular.module('coderFriends');

app.controller('HomeCtrlr', function($scope, GithubService, friends) {

	$scope.friends = friends;
	
});