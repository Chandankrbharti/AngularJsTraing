var myapp=angular.module('myapp');
myapp.service('AppService',['$http','$q',function($http,$q){
   
    this.getStudents=function(){
             var defer=$q.defer();
               var httppromise=$http.get("/student.json");
               httppromise.then(function(result){
                var students=result.data.map(function(item){
                item.seniority=item.age>10?"s":"j";
                return item;
                });
                defer.resolve(students);
            });
           return  defer.promise;
    };
   
    this.getData=function(){
        var defer=$q.defer();
        setTimeout(function(){
            defer.resolve('hello');
        },1000
    );
    defer.promise;
    };
}]);