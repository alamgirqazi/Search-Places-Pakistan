angular.module('articles').factory('Article', ['$resource', function ($resource) {
    return $resource('api/articles/:articleId',
        {
            articleId: '@id'
        },
        {
            update: {
                method: 'PUT'
            }
        });

}]);