var app = angular.module('coderFriends');

app.controller('MainCtrlr', function($scope, GithubService, $location, $window) {

	$scope.test = "WORK"

	$scope.github = function() {
		$window.location.href = '/auth/github';
	};

	
});