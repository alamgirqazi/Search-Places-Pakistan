angular.module('example').controller('ExampleController', ['$scope', 'Authentication', function ($scope, Authentication) {
    $scope.name = Authentication.user ? user.fullName : 'Welcome';
}]);