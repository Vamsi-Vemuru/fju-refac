describe('landingPageController', function() {
  beforeEach(module('landingpage'));
  beforeEach(module('fjuServices'));
  beforeEach(module('fjuDirectives'));
  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.user', function() {
    it('should be empty if input is empty when invalid form submitted', function() {
      var $scope = {};
      var controller = $controller('landingPageCtrl', { $scope: $scope });
      $scope.user = {fname:'Vamsi'};
      $scope.register();
      expect($scope.user).toEqual({});
    });
  });
});