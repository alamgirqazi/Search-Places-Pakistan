angular.module('mean').controller('googleMapController', function(NgMap) {
    NgMap.getMap().then(function(map) {
        console.log(map.getCenter());
        console.log();

        // console.log('markers', map.markers);
        // console.log('shapes', map.shapes);
    });
});