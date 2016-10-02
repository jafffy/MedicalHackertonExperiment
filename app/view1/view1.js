'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [ "$scope", function($scope) {
  $scope.type = "A";
  $scope.subjectID = "";
  $scope.lastSubjectID = "";

  $scope.form = {
    sex: null
  };
  $scope.goNext = function () {
    window.location = "#!/view2";
  };

}]);