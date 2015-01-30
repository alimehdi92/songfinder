// Spinner for loading the results
var opts = {
  lines: 13, // The number of lines to draw
  length: 7, // The length of each line
  width: 10, // The line thickness
  radius: 30, // The radius of the inner circle
  corners: 1, // Corner roundness (0..1)
  rotate: 0, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#000', // #rgb or #rrggbb or array of colors
  speed: 1, // Rounds per second
  trail: 60, // Afterglow percentage
  shadow: false, // Whether to render a shadow
  hwaccel: false, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: '25%', // Top position relative to parent
  left: '50%' // Left position relative to parent
};
var target = document.getElementById('spinner');

app = angular.module('songfinder', []);

app.controller('FetchSongsCtrl', ['$scope', '$http', function($scope, $http) {
    var youtubeAPI = 'https://gdata.youtube.com/feeds/api/videos?alt=json&q=';
    var downloaderAPI = 'http://YouTubeInMP3.com/fetch/?video=';
    $scope.results = false;
    
    $scope.getSongs = function () {
        $scope.results = false;
        var spinner = new Spinner(opts).spin(target);
        $http.get(youtubeAPI + $scope.query).success(function(response) {
            $scope.results = response.feed;
            spinner.stop();
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




