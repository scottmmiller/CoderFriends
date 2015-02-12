var app = angular.module('coderFriends', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/templates/home.html',
			controller: 'MainCtrlr',
			resolve: {

			}
		})
		.when('/home', {
			templateUrl: '/templates/home.html',
			controller: 'HomeCtrlr',
			resolve: {
				friends: function(GithubService) {
					GithubService.getFollowing();
				}
			}
		})
		.when('/friend/:github_username', {
			templateUrl: '/friend.html',
			controller: 'FriendCtrlr',
			resolve: {

			}
		})
		.otherwise('/');

});