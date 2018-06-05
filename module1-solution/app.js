(function(){
    'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController)
    LunchCheckController.$inject =['$scope'];
    function LunchCheckController($scope){
        $scope.name ='';
        $scope.alert="";
        var message='';
        $scope.sendString =function() {
            var comma =',';
           var fun= splitString($scope.name,comma);
           $scope.alert = fun;
        }
        function splitString(stringToSplit, separator){
            var arrayOfStrings= stringToSplit.split(separator);
            var len = arrayOfStrings.length;
            if(len == 0){
                message = "Enter The Items";
            }
            else if(len <= 3){
                message ="Enjoy!";
            }
            else if(len > 3){
                message="Too much!"
            }
            return message;
         }

    };
})();

    

