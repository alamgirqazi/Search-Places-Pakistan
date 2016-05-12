angular.module('articles').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/articles', {templateUrl: 'article/views/list-article.client.view.html'})
        .when('/articles/create', {templateUrl: 'article/views/create-article.client.view.html'})
        .when('/articles/:articleId', {templateUrl: 'article/views/view-article.client.view.html'})
        .when('/articles/:articleId/edit', {templateUrl: 'article/views/edit-article.client.view.html'})

}]);