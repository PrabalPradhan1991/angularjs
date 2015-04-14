angular.module('apiFactory', [])
       .factory('api', function($http){
  return {
    list: function (callback)
    {
      $http({
        method: 'GET',
        url: 'http://localhost/techroadians/nepal-banda/public/v1/idea',
        cache: true
      }).success(callback);
    },

    store: function(callback, formdata)
    {
      $http({
         method: 'POST',
         url: 'http://localhost/techroadians/nepal-banda/public/v1/idea',
          headers: {
                     'Content-Type': undefined
                   },         
         data: {'user':'value'}
          })
          .success(callback)
          .error('error');
    },
    find: function(id, callback)
    {
      $http({
        method: 'GET',
        url: 'country_' + id + '.json',
        cache: true
      }).success(callback);
    }
  };
});
