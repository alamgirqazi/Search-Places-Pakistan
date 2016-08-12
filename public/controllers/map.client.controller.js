angular.module('mean')
    .controller('exampleController',  function ($scope) {
        $scope.place = null;
        $scope.autocompleteOptions = {
            componentRestrictions: { country: 'pk' },
            types: ['establishment']
        }

        $scope.myFunc = function() {
console.log('val changed');
        console.log($scope.place.geometry.location.lat(),$scope.place.geometry.location.lng());
        };

        });

