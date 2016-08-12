angular.module('articles').controller('ArticlesController', ['$scope', '$routeParams', '$location', 'Article', 'Authentication', function ($scope, $routeParams, $location, Article, Authentication) {
    $scope.authentication = Authentication;
    $scope.create = function () {
        var article = new Article({
            title: this.title,
            content: this.content
        });
        article.$save(function (response) {
            $location.path('articles/', response._id);
            console.log(response);
        }, function (errorResponse) {
            $scope.error = errorResponse.data.message;
        });
    };
    $scope.update = function () {
    $scope.article.$update(function () {
            $location.path('articles/' + $scope.article._id);
        }, function (errorResponse) {
            $scope.error = errorResponse.data.message;
        })

    };
    $scope.delete = function (article) {
        if (article) {
            article.$remove(function () {
                for (var i in $scope.articles) {
                    if (i === article) {
                        $scope.articles.splice(i, 1);
                    }
                }
            });
        } else {
            $scope.article.$remove(function () {
                $location.path('articles');
            }, function (errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        }
    };
    $scope.find = function () {
        $scope.articles = Article.query();
    };
    $scope.findOne = function () {
        $scope.article = Article.get({articleId: $routeParams.articleId});
    };
}]);