var myapp=angular.module('myapp',[]);
myapp.controller('MyCtrl',['$scope','AppService',function($scope,AppService){
$scope.myval="hello chandan";
$scope.onClick=function(){
    alert($scope.myval);
}
AppService.getStudents().then(function(result){
    $scope.students=result.data.map(function(item){
    item.seniority=item.age>10?"s":"j";
    return item;
    });
});

$scope.showS=function(student){
   
    $scope.selectedstudents=student;
}


}]);