var myapp=angular.module('myapp');
myapp.component('studentDetails',{
    templateUrl :'student-details.tlp.html',
    //controllerAs:'vm',
    controller: [function(){
        this.myname='custom component';
    }]
});