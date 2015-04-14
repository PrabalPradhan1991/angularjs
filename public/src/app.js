angular.module('ContactsApp', ['ngRoute', 'apiFactory'])
	   .config(function ($routeProvider, $locationProvider)
	   {
	   		$routeProvider.when('/contacts', 
	   						{
	   							controller: 'ListController',
	   							templateUrl: 'views/list.html'
	   						})

	   						.when('/contact/new',
	   						{
	   							controller: 'NewController',
	   							templateUrl: 'views/new-self.html'
	   						})
	   						.when('/contact/view/:id',
	   						{
	   							controller: 'ViewController',
	   							templateUrl: 'views/view.html'
	   						})
	   						.when('/contact/edit/:id',
	   						{
	   							controller: 'EditController',
	   							templateUrl: 'views/edit.html'
	   						});
	   		$locationProvider.html5Mode(true);
	   	});