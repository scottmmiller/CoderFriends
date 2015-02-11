var app = angular.module('coderFriends', ['ngRoute']);

app.config(function($routeProvider() {
	$routeProvider
		.when('/', {
			templateUrl: '/',
			controller: MainCtrlr,
			resolve: {

			}
		})
		.when('/home', {
			templateUrl: 'home.html',
			controller: HomeCtrlr,
			resolve: {

			}
		})
		.when('/friend/:github_username', {
			templateUrl: '/friend.html',
			controller: FriendCtrlr,
			resolve: {

			}
		})
		.otherwise('/');

}));