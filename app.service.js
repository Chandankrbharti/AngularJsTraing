var myapp=angular.module('myapp');
myapp.service('AppService',['$http',function($http){
   
    this.getStudents=function(){
              return $http.get("/student.json");
    };
}]);