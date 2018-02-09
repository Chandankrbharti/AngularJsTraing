var myapp=angular.module('myapp');
myapp.service('AppService',[function(){
   
    this.getStudents=function(){
              return $http.get("/student.json");
    };
}]);