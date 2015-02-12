var app = angular.module('coderFriends');

app.service('GithubService', function($http, $q) {

	this.getFollowing = function() {
		var deferred = $q.defer();
		$http({
			method: "GET",
			url: '/api/github/following',
			data: {
				friends: name
			}
		})
		.then(function(response, error) {
			console.log(response.data)
			deferred.response(response.data);
		}, function(error) {
			deferred.reject(error);
		});
		return deferred.promise;
	};

});