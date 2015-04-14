angular.module('apiFactory', [])
       .service('api', function($http){
    //to create unique contact id
    var urlBase = 'http://localhost/techroadians/nepal-banda/public/v1/idea';
    //var dataFactory = {};

    this.list = function () {
        return $http.get(urlBase);
    };

    this.view = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    this.store = function (formdata) {
        return $http
        ({
          method: 'POST',
          url: urlBase,
            headers: {
                       'Content-Type': 'application/x-www-form-urlencoded'
                     },         
          data: formdata
        })
    };

   this.update = function (formdata, id) {
        console.log(formdata);
        return $http
        ({
          method: 'POST',
          url: urlBase + '/' + id + '?&_method=put',
            headers: {
                       'Content-Type': 'application/x-www-form-urlencoded'
                     },         
          data: formdata
        })
    };

    this.delete = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    return this;
});