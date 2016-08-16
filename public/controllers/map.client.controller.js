angular.module('mean')
    .controller('exampleController',  function ($scope,NgMap,$http,Authentication) {

        $scope.Authentication = Authentication;
        NgMap.getMap().then(function (map) {
            // console.log(map.getCenter());
             console.log(map.getCenter().lat(), map.getCenter().lng());
            // Original Latitude and Longitude
            $scope.origLati = map.getCenter().lat();
            $scope.origLongi = map.getCenter().lng();

        });

        // New Algo
        var Rm = 3961; // mean radius of the earth (miles) at 39 degrees from the equator
        var Rk = 6373; // mean radius of the earth (km) at 39 degrees from the equator
        function findDistance() {
            var t1, n1, t2, n2, lat1, lon1, lat2, lon2, dlat, dlon, a, c, dm, dk, mi, km;

            // get values for lat1, lon1, lat2, and lon2
            t1 = $scope.origLati;
            n1 = $scope.origLongi;
            t2 =  $scope.place.geometry.location.lat();
            n2 =  $scope.place.geometry.location.lng();

            // convert coordinates to radians
            lat1 = deg2rad(t1);
            lon1 = deg2rad(n1);
            lat2 = deg2rad(t2);
            lon2 = deg2rad(n2);

            // find the differences between the coordinates
            dlat = lat2 - lat1;
            dlon = lon2 - lon1;

            // here's the heavy lifting
            a  = Math.pow(Math.sin(dlat/2),2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon/2),2);
            c  = 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1-a)); // great circle distance in radians
            dm = c * Rm; // great circle distance in miles
            dk = c * Rk; // great circle distance in km

            // round the results down to the nearest 1/1000
            mi = round(dm);
            km = round(dk);

            // display the result
            // frm.mi.value = mi;
            // frm.km.value = km;

            if ( $scope.origLati === 0)
            {
                $scope.place.miles = undefined;
                $scope.place.kms = undefined;

$scope.place.msg = "Please allow the browser to get your current location to calculate the distance and refresh your browser";
            }
            else {
                $scope.place.miles = mi;
                $scope.place.kms = km;

            }


            console.log('Distance in miles: ' +  $scope.place.miles);
console.log('Distance in kilometers: ' +   $scope.place.kms);

        }


        // convert degrees to radians
        function deg2rad(deg) {
            rad = deg * Math.PI/180; // radians = degrees * pi/180
            return rad;
        }
        // round to the nearest 1/1000
        function round(x) {
            return Math.round( x * 1000) / 1000;
        }

        var selections= [
            "shopping_mall",
            "point_of_interest",
            "establishment"
        ];

        $scope.place = null;
        $scope.autocompleteOptions = {
            componentRestrictions: {country: 'pk'},
            types: ['establishment']
        };
var abc;
        $scope.myFunc = function () {
           //while(search_term_value!== null) {
                console.log('val changed');
                console.log('lat and lng of selected place: ');
            if(!$scope.place.geometry){
                console.log('return');
                // $scope.place=abc;
return;
            }
       //     abc=$scope.place;
                console.log($scope.place.geometry.location.lat(), $scope.place.geometry.location.lng());
                // console.log('distance: ');


            console.log(" name " + $scope.place.name);
            console.log(" formatted_address:   " + $scope.formatted_address);
            console.log(" adr_address:   " + $scope.adr_address);
            console.log(" formatted_phone_number  " + $scope.place.formatted_phone_number);
             console.log(" international_phone_number " + $scope.place.international_phone_number);
             console.log(" Vicinity " + $scope.place.vicinity);
             console.log(" Url " + $scope.place.url);
            findDistance();


           if(Authentication.user) {

               $http.post('/api/googleSearch', $scope.place).then(function (res) {
                   console.log(res);
               });

               $http.get('/api/googleSearch/savedSearches').then(function (res) {
                   console.log(res);
               });

                  }


            }
            ;
    });