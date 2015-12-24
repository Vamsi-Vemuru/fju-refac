'use strict';

var landingPageController = angular.module('landingPageController',[])


landingPageController.controller("landingPageCtrl", ['$scope', 'landingPageService', function($scope, landingPageService) {
  landingPageService.query(function(data) {
      console.log(data)
      $scope.degreeTitle = data.heading;
      $scope.degreeDesc = data.description;
      $scope.courseReq = data.fieldsList[0];
      $scope.preReq= data.fieldsList[1];
      $scope.tution = data.fieldsList[2];
  });
 
}]);