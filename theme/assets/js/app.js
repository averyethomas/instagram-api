var app = angular.module('angularApp', []);

app.controller('instaCtrl', ['$scope', '$http', function ($scope, $http) {
    
    $scope.username = 'averyethomas';
    $scope.accessToken = '42820715.160a976.c5a1c2ea539141879bb411e8ec520ec3';
    $scope.url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + $scope.accessToken + '&count=-1';
    $scope.instaData = [];

    $scope.getData = function(){
        $http({
            method: 'GET',
            url: $scope.url,
        }).
            success(function(data, status, headers, config){
                $scope.currentDataNumber = data.length;
                $scope.instaData = data.data;
                console.log('success');
                console.log($scope.instaData);
        }).
            error(function(data, status, headers, config){
                console.log('error');
            });
    };
    
    $scope.getData();
    
}]);
