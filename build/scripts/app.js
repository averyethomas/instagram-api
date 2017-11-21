var app = angular.module('angularApp', []);

app.controller('instaCtrl', ['$scope', '$http', function ($scope, $http) {
    
    $scope.username = 'averyethomas';
    $scope.accessToken = '42820715.160a976.c5a1c2ea539141879bb411e8ec520ec3';


    $scope.PostsUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + $scope.accessToken;
    $scope.posts = [];

    $scope.getPosts = function(){
        $http({
            method: 'GET',
            url: $scope.PostsUrl,
        }).
            success(function(data, status, headers, config){
                $scope.posts = data.data;
                console.log($scope.posts);
        }).
            error(function(data, status, headers, config){
                console.log('error');
            });
    };
    
    $scope.getPosts();

    $scope.postID = '1652432592497508217';
    $scope.likesUrl = 'https://api.instagram.com/v1/media/' + $scope.postID + '/likes?access_token=' + $scope.accessToken;

    $scope.getLikes = function(){
        $http({
            method: 'GET',
            url: $scope.likesUrl,
        }).
        success(function(data, status, headers, config){
            $scope.likes = data.data;
            console.log($scope.likes)
        }).
        error(function(data, status, headers, config){
            console.log('error');
        });
    };

    $scope.getLikes();
    
}]);
