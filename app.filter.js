var myapp = angular.module('myapp');

myapp.filter('CustName',[
    function(){

    return function(value,greeting){
        return greeting+"my.."+value;
    };
}]);