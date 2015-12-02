'use strict';

app.controller('HeaderController', function($scope, $mdSidenav, $menu) {

	$scope.toggleSidenav = function($sidId) {
		$mdSidenav($sidId).toggle();
	}

	$scope.closeSidenav = function(navID) {
		$mdSidenav(navID).close();
	};

	$menu.menu('main').then(function(menu) {
		$scope.navbar = menu;
	});
	$menu.menu('sidebar').then(function(menu) {
		$scope.sidebar = menu;
	});

});