'use strict';

/*
 * نرم افزار اصلی سیستم
 */
app.controller('AppMainController', function($scope) {

})

/*
 * نرم افزار مدیریت سیستم
 */
.controller('AppAdminController', function($scope, $menu) {
	
	$menu.menu('cpanel').then(function(menu) {
		$scope.controllers = menu;
	});
})
/*
 * 
 */
.controller('AppHelpController', function($scope, $menu) {
	
})
/*
 * 
 */
.controller('AppUsrController', function($scope, $menu) {
});