angular.module('ContactsApp')
		.filter('labelCase', function ()
		{
			return function (input)
			{
				input = input.replace(/([A-Z])/g, ' $i');
				return input[0].toUpperCase() + input.slice(1);
			}
		})