var app = angular.module('coderFriends');

app.controller('MainCtrlr', function($http, $q) {

	$scope.github = function() {
		redirectTo: '/auth/github'
	};
});