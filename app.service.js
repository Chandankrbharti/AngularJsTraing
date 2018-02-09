var myapp=angular.module('myapp');
myapp.service('AppService',[function(){
    var students=[
        {
            name:"chanan",
            age:25
        },
        {
            name :"chandani",
            age :22
        }
    ];
    this.getStudents=function(){
        return students;
    };
}]);