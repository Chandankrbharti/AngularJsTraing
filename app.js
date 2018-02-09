var myapp=angular.module('myapp',['ui.router']);
myapp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider.state({
        name:'home',
        url:'/home',
        component :'homepage'
        
    });
    $stateProvider.state({
        name:'about',
        url:'/about',
        component :'aboutpage'
    });
    $urlRouterProvider.otherwise('/home');
}]);
myapp.controller('MyCtrl',['$scope','AppService',function($scope,AppService){

AppService.getStudents().then(function(result){
    $scope.students=result;  
});
    

$scope.showS=function(student){
   
    $scope.selectedstudents=student;
};


}]);