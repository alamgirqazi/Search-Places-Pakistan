// angular.module('mean').directive('googleplace', function() {
//     return {
//         require : 'ngModel',
//         link : function(scope, element, attrs, model) {
//
//
//
//             //
//             // function set_markers(bounds, map) {
//             //     console.log('#locations: ' + locations.length);
//             //     console.log(bounds);
//             //
//             //     for (var i = 0; i < locations.length; i++) {
//             //         marker = new google.maps.Marker({
//             //             position: new google.maps.LatLng(locations[i][1], locations[i][2]),
//             //             map: map
//             //         });
//             //         bounds.extend(marker.position);
//             //         google.maps.event.addListener(marker, 'click', (function (marker, i) {
//             //             return function () {
//             //                 infowindow.setContent(locations[i][0]);
//             //                 infowindow.open(map, marker);
//             //             }
//             //         })(marker, i));
//             //     }
//             //     map.fitBounds(bounds);
//             // }
//
//             var options = {
//                 types: ['establishment'],
//                 radius: 1000,
//                 componentRestrictions: {country: "pk"}
//             };
//             scope.gPlace = new google.maps.places.Autocomplete(element[0],
//                 options);
//             if (navigator.geolocation) {
//                 navigator.geolocation.getCurrentPosition(success);
//
//             }
//             function showmap(latitude, longitude) {
//
//                 var pyrmont = {lat: latitude, lng: longitude};
//                 console.log(pyrmont);
//
//                 var map = new google.maps.Map(document.getElementById('map'), {
//                     center: {lat: latitude, lng: longitude},
//                     // centre : pyrmont,
//                     zoom: 13
//                 });
//             }
//
//             function success(position) {
//                 var latitude = position.coords.latitude;
//                 var longitude = position.coords.longitude;
//                 //  output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
//                 showmap(latitude, longitude);
//                       var location = new google.maps.LatLng(latitude, longitude);
//                     console.log('location:' + location);
//             };
//
//             google.maps.event.addListener(scope.gPlace, 'place_changed',
//                 function () {
//                     scope.$apply(function () {
//                         model.$setViewValue(element.val());
//                     });
//                 });
//             // function marker(latitude, longitude) {
//             //     var marker = new google.maps.Marker({
//             //         map: map,
//             //         position: pyrmont
//             //     });
//             //     marker.setMap(map);
//             // }
//         }
//         };
//         });
