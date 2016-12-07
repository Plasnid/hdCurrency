app.controller('CurrencyCtrl',['$scope', 'currencyRatesData', function($scope, currencyRatesData){
  $scope.rates = {};
  init();
  function init(){
    currencyRatesData.getRates().success(function(data,status){
      $scope.rates = data.rates;
      $scope.toType = $scope.rates.USD;
      $scope.fromType = $scope.rates.CAD;
      $scope.fromValue = 1;
      $scope.forExConvert();
    });
  }
    $scope.forExConvert = function(){
      $scope.toValue = $scope.fromValue * ($scope.toType * (1/$scope.fromType));
      $scope.toValue = $scope.toValue;
    };
    $scope.$watch('toValue', function(){
      $scope.toValue = Math.round($scope.toValue*100)/100;
    });
}]);
