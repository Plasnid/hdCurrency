app.directive("monetaryExchange",function(){
  return {
    restrict:"E",
    templateUrl:"templates/exchangeTemplate.html",
    scope: true,
    controller:"CurrencyCtrl"
  }
});
