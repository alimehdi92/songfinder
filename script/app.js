app = angular.module('songfinder', []);

app.controller('FetchSongsCtrl', ['$scope', '$http', function($scope, $http) {
    var youtubeAPI = 'https://gdata.youtube.com/feeds/api/videos?alt=json&q=';
    var downloaderAPI = 'http://YouTubeInMP3.com/fetch/?video=';
    $scope.results = false;
    
    $scope.getSongs = function () {
        $http.get(youtubeAPI + $scope.query).success(function(response) {
            $scope.results = response.feed;
        });
    }
    
    $scope.getVideoID = function(url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
          return match[2];
        } else {
          //error
        }
    }
}]);

