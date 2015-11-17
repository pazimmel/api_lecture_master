var myApp = angular.module('myApp', []);

myApp.controller('APIController', ['$scope', '$http', function($scope, $http) {
    $scope.results, $scope.number;
    var apikey = "80225b21486f42f1c583436085dc460ebe670f7c";
    var baseUrl = "http://www.giantbomb.com/api";

    // construct our URL
    var gameSearchURL = baseUrl + '/search/?api_key=' + apikey + '&format=jsonp&limit=50';
    var query = 'Batman & Robin';

    var finalURL = gameSearchURL + '&query=' + encodeURI(query) + '&json_callback=JSON_CALLBACK';

    $http.jsonp(finalURL).then(
        function(response) {
            $scope.results = response.data.results;
            console.log($scope.results);
            $scope.number = response.data.number_of_page_results;
        }
    );


}]);

//stuff I want
    //results.name
    //results.deck description of stuff
    //results.image.icon and then to zoom in results.image.medium
    //results.number_of_user_reviews