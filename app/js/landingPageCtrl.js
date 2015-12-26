'use strict';

var landingPageController = angular.module('landingPageController',[])


landingPageController.controller("landingPageCtrl", ['$scope', 'landingPageService', function($scope, landingPageService) {
  $scope.user = {};
  landingPageService.query(function(data) {
      $scope.degreeTitle = data.heading;
      $scope.degreeDesc = data.description;
      $scope.courseReq = data.fieldsList[0];
      $scope.preReq= data.fieldsList[1];
      $scope.tution = data.fieldsList[2];
  });

  $scope.register = function() {
    if (Object.keys($scope.user).length < 5) {
      console.log("Invalid Form");
    } else {
      console.log($scope.user);
    }
    
  };
  
}]);


