
var express 	= require('express'),
	bodyParser	= require('bdy-parser'),
	router 		= express.Route();

router
	.use(funciton (req, res, next)
	{
		if(!req.user) req.user = { id:1 };
		next();
	})
	.use(bodyParser.json())
	.route('/contact')
		.get(funcion (req, res)
		{
			angular.module("ContactsApp", [])
        			.controller("MyController", function($scope, $http) {
		});
	.
