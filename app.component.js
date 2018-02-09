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
myapp.component('homepage',{
    template:'<div>This is the home page</div>'
})
myapp.component('aboutpage',{
    template:'<div>This is the about page</div>'
})
