angular.module('ContactsApp')
		.controller('ListController', function ($scope, $rootScope, api, $location)
		{
			$rootScope.PAGE = 'all';
		 	$scope.contacts = api.list()
            .success(function (custs) {
                $scope.contacts = custs;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });

            $scope.fields = ['firstname', 'phone'];

		    	$scope.sort = function (field)
		    	{
		    		$scope.sort.field = field;
		    		$scope.sort.order = !$scope.sort.order;
		    	};

		    	$scope.sort.field = 'firstname';
		    	$scope.sort.order = false;

		    	$scope.show = function (id)
		    	{
		    		$location.url('contact/view/' + id);
		    	}
		})
		.controller('NewController', function ($scope, $rootScope, api, $location)
		{
			$rootScope.PAGE = 'new';
			var result;
			$scope.status = '';

			$scope.save = function()
			{
				//console.log(api);
				$scope.data = angular.toJson($scope.data);
				var formdata = $scope.data;

				var returndata = api.store(formdata).success(function (data) {
                if(data.status == 'error')
                {
                	$location.url('/contact/new');
                }
                else
                {
                	$location.url('/contacts');
                }
                //$scope.customers.push(cust);
	            }).error(function(error) {
	                $scope.status = 'Unable to insert customer: ' + error.message;
	            });

	            $scope.cancel = function()
	            {
	            	$location.url('contacts');
	            }
			}
		})
		.controller('ViewController', function ($scope, $rootScope, api, $location, $routeParams)
		{
			$rootScope.PAGE = 'single';
			var result;
			$scope.status = '';
			var recordId = $routeParams.id;

			api.view(recordId)
            .success(function (custs) {
                $scope.data = custs.data;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });

            $scope.cancel = function()
	            {
	            	$location.url('contacts');
	            }
		})
		.controller('EditController', function ($scope, $rootScope, api, $location, $routeParams)
		{
			$rootScope.PAGE = 'single';
			var result;
			$scope.status = '';
			recordId = $routeParams.id;

			api.view(recordId)
            .success(function (custs) {
                $scope.data = custs.data;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });

            $scope.cancel = function()
	            {
	            	$location.url('contacts');
	            }

			$scope.save = function()
			{
				//console.log(api);
				//$scope.data = angular.toJson($scope.data);
				var formdata = {};
				formdata.firstname = $scope.data.firstname;
				formdata.idea = $scope.data.ideas_of_users[0].idea;
				formdata.email = $scope.data.email;
				formdata.phone = $scope.data.phone;
				formdata = angular.toJson(formdata);
				//formdata._method = $scope.data.ideas_from_users[0].idea;
				
				var returndata = api.update(formdata, recordId).success(function (data) {
					//console.log(data);
                if(data.status == 'error')
                {
                	$location.url('contact/edit/' + recordId);
                }
                else
                {
                	$location.url('contact/view/' + recordId);
                }
                //$scope.customers.push(cust);
	            }).
	            error(function(error) {
	                $scope.status = 'Unable to insert customer: ' + error.message;
	            });
			}
		})
