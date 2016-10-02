'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [ "$scope", "$interval", function($scope, $interval) {
  $scope.content = "";
  $scope.lastContent = "";
  $scope.totalWordCount = 0;
  $scope.negativeWordCount = 0;
	$scope.positiveWordCount = 0;
	$scope.elapsedTime = 0;
	$scope.isElapsedTimeStarted = false;
	$scope.representedElapsedTime = 0;

	$scope.change = function() {
		$scope.isElapsedTimeStarted = true;

		if (!$scope.content.startsWith($scope.lastContent)) {
			$scope.content = $scope.lastContent;
		} else {
			$scope.lastContent = $scope.content;
		}
	};

	$interval(function() {
		if ($scope.isElapsedTimeStarted == false)
			return;

		$scope.elapsedTime += 0.1;
		$scope.representedElapsedTime = Math.floor($scope.elapsedTime);
	}, 100);
}]);