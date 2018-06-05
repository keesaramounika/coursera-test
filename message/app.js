var mysampleApp = angular.module("MsgApp",[]);
mysampleApp.controller("MsgController", MsgController)
mysampleApp.filter('loves',LovesFilter);
MsgController.$inject =['$scope','lovesFilter'];
function MsgController($scope,lovesFilter){
    $scope.name ="keesara";
    $scope.stateOfBeing ="abc";
    $scope.sayMessage = function(){
        var msg = "keesara likes to eat baked food";
    
        return msg;
    };

    $scope.sayLovesMessage = function () {
        var msg = "keesara likes to eat baked food";
         msg = LovesFilter(msg);
        return msg;
    };
    $scope.swaMou = function(){
        $scope.stateOfBeing= "def";
    };
}
function LovesFilter() {
    return function (input) {
        input = input || "";
        input = input.replace("likes", "loves");
        return input;
    };
}