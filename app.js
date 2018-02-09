var myapp=angular.module('myapp',[]);
myapp.controller('MyCtrl',['$scope','AppService',function($scope,AppService){
$scope.myval="hello chandan";
$scope.onClick=function(){
    alert($scope.myval);
}
$scope.students=AppService.getStudents();
$scope.showS=function(student){
   
    $scope.selectedstudents=student;
}


}]);