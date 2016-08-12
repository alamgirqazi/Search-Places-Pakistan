 // var mainApplicationModuleName = 'mean';
 var mainApplicationModule = angular.module('mean', ['ngResource','ngMap','google.places','ngRoute', 'users', 'example','articles']);
 mainApplicationModule.config(['$locationProvider','$routeProvider', function ($locationProvider,$routeProvider) {
    $locationProvider.hashPrefix('!');
     $routeProvider.when('/maps',
         {
             templateUrl:'views/maps.html'
         });
     $routeProvider.when('/googleMap',
         {
             templateUrl:'views/googleMap.html'
         });

//
 }]);
angular.element(document).ready(function () {
    angular.bootstrap(document, ['mean']);
});