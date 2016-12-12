app.factory('currencyRatesData', function($http){
  var factory = {};
  factory.getRates = function(){
    //return $http.get('data/rates.json');
    return $http.get('http://api.fixer.io/latest?base=GBP&symbols=USD,CAD,EUR');
  };
  return factory;
});
