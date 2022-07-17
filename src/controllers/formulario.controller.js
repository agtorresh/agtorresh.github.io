(function () {

	'use strict'

	angular.module('servidorMulter').controller('formularioController', formularioController);
	formularioController.$inject = [];
	function formularioController() {
		var vm = this;

		boot();

		function boot() {
			revisarHora();
		}

		function revisarHora(){
			$(document).ready(function () {
				$(".simpleExample").timepicker();
			});
		}

	}

})();