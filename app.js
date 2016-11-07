
(function() {
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', function($scope) {
  $scope.lunchMenu = ""
  $scope.result = ""
  $scope.check = function (){
    if (   $scope.lunchMenu == ""){
      $scope.result = "Please enter data first";
    }
    else{
      var numberOfItems = $scope.lunchMenu.split(",").length;
      if(numberOfItems < 4){
        $scope.result = "Enjoy!"
      }
      else{
        $scope.result = "Too much!"
      }
    }
  };
});
})();
