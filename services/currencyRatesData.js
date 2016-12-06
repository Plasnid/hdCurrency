app.factory('currencyRatesData', function($http){
  var factory = {};
  factory.getRates = function(){
    return $http.get('data/rates.json');
  };
  return factory;
});
