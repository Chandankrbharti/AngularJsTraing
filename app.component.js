var myapp=angular.module('myapp');
myapp.component('studentDetails',{
    templateUrl :'student-details.tlp.html',
    //controllerAs:'vm',
    bindings:{
        myTitle : '@', //string
        selectedStudents : '<' //properties
    },
    controller: [function(){
        this.myname='custom component';
    }]
});