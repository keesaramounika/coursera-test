var mySampleApp = angular.module("myApp",[])
mySampleApp.controller('DIController',DIcontroller);


function DIcontroller ($scope, $filter) {
    $scope.name = "mounika";


    $scope.upper =function(){
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
    };
}