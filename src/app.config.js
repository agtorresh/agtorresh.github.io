(function(){
	'use strict'

	angular.module("servidorMulter").config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				controller: 'indexController',
				controllerAs: 'index'
			})

			.when('/commander', {
				templateUrl: 'views/crew-commander.html',
				controller: 'formularioController',
				controllerAs: 'form'
			})

			.when('/destination', {
				templateUrl: 'views/destination.html',
				controller: 'formularioController',
				controllerAs: 'form'
			})

			.when('/home', {
				templateUrl: 'views/home.html',
				controller: 'formularioController',
				controllerAs: 'form'
			})

			.when('/technology', {
				templateUrl: 'views/technology.html',
				controller: 'formularioController',
				controllerAs: 'form'
			})

			.otherwise({redirectTo: '/'})

	}])

})();