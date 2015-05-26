app = angular.module('songfinder', []);

app.controller('FetchSongsCtrl', ['$scope', function($scope) {
    $scope.results = false;
    $scope.loading = false;
    
    $scope.getSongs = function () {
        $scope.results = false;
        $scope.loading = true;

        var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: $scope.query,
            maxResults: 10
        });
        $scope.query = "";
        // execute the request
        request.execute(function (response) {
            var results = response.result.items;
            $scope.loading = false;
            $scope.results = results;
            $scope.$apply();
        });
    }
}]);

// init function for the youtube-api
function init() {
    gapi.client.setApiKey("AIzaSyDXXfOvUfL-fq9KgfnFKOFKSUf-HDnLmhI");
    gapi.client.load("youtube", "v3", function() {});
}





