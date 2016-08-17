/**
 * Created by Alamgir Munir Qazi on 8/17/2016.
 */
angular.module('mean', []).filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
