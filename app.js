var myapp=angular.module('myapp',[]);
myapp.controller('MyCtrl',['$scope','AppService',function($scope,AppService){

AppService.getStudents().then(function(result){
    $scope.students=result;  
});
    

$scope.showS=function(student){
   
    $scope.selectedstudents=student;
};


}]);