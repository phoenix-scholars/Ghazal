'use strict';

app
/*
 * 
 */
.controller('MainController', function ($scope, $notify, $act, $state,
    $mdDialog, $usr, $menu, appcache) {
  
  appcache.checkUpdate().then(function() {
    alert('There\'s an update available!');
    return appcache.swapCache();
  }).then(function(){
    alert('Application cache updated.');
  });
	/**
	 * کاربر را از سیستم خارج می‌کند. با خارج شدن کاربر از سیستم مسیر نرم‌افزار به
	 * صفحه اصلی انتقال پیدا می‌کند.
	 */
	$scope.logout = function () {
		if ($scope.user) {
			$usr.logout().then(function (user) {
				$scope.user = user;
				$window.location.href = '/';
			});
		}
	}

	$scope.exec = function (command) {
		var args = Array.prototype.slice.call(arguments);
		args[0] = command.id;
		$act.execute.apply($act, args).then(function () {
			$notify.error('fail to execute command', ex);
		}, function (ex) {
			$notify.error('fail to execute command', ex);
		});
	}

	/*
	 * بارگذاری نرم‌افزار
	 */
	$scope.loadMainController = function () {
		$scope.ready = false;
		$scope.app = {
		  /**
			 * حالتهای متفاوتی که نرم افزار داره رو تعیین می‌کنه. این حالت‌های می‌تونه
			 * یکی از مقدارهای زیر باشه:
			 * <ul>
			 * <li>0- loading</li>
			 * <li>1- loaded</li>
			 * <li>2- offline</li>
			 * <li>3- error</li>
			 * <li>4- warning</li>
			 * </ul>
			 */
		  state : 0,
		  preloading : {
		    progress : 0,
		    title : 'main controller',
		    message : 'loading main controller.'
		  }
		};
		// 1- load user and application
		$usr.session().then(function (user) {
			$scope.app.preloading = {
			  progress : 30,
			  title : 'loading user date',
			  message : 'try to get user data from the server'
			}
		}, function (error) {
			// fail to load the user
		}).then(function () {
			$scope.app.state = 1;
		}, function () {
			$scope.app.state = 1;
		}).then(function(){
			$usr.session().then(function (user){
				if(user.isAnonymous()){
				  return $state.go('welcome');
				}
			})
		});
	}

	// Load the controller
	$scope.loadMainController();
	
	$act
	/**
	 * logout
	 */
	.commandHandler({
		commandId : 'pluf.user.logout',
		handle : function () {
			$state.go('welcome');
		}
	})
	/*
	 * login
	 */
	.command({
	  id : 'ava.user.login.form',
	  label : 'login',
	  description : 'login into the system',
	  visible : function () {
		  return $usr.isAnonymous();
	  },
	  category : 'usr',
	}).commandHandler({
		commandId : 'ava.user.login.form',
		handle : function () {
			return $mdDialog.show({
				templateUrl : '/ghazal/dialog/login.html',
				controller : function ($scope, $mdDialog) {
					$scope.closeDialog = function () {
						$mdDialog.hide();
					}
					$scope.login = function (par) {
						$mdDialog.hide();
						$scope.exec({
							id : 'pluf.user.login'
						}, par);
					}
					$scope.exec = function (command) {
						var args = Array.prototype.slice.call(arguments);
						args[0] = command.id;
						$act.execute.apply($act, args).then(function () {
							$notify.error('fail to execute command', ex);
							
						}, function (ex) {
							$notify.error('fail to execute command', ex);
						});
					}
				}
			});
		}
	})
	/*
	 * profile
	 */
	.command({
	  id : 'ava.user.profile',
	  label : 'profile',
	  description : 'go to the profile page',
	  visible : function () {
		  return !$usr.isAnonymous();
	  },
	}).commandHandler({
	  commandId : 'ava.user.profile',
	  handle : function () {
		  return $state.go('usr.profile');
	  }
	})
	/*
	 * admin
	 */
	.command({
	  id : 'ava.admin.cpanel',
	  label : 'cpanel',
	  description : 'go to admin controll panel page',
	  visible : function () {
		  return !$usr.isAnonymous();
	  },
	}).commandHandler({
	  commandId : 'ava.admin.cpanel',
	  handle : function () {
		  return $state.go('admin.cpanel');
	  }
	}).command({
	  id : 'ava.admin.app',
	  label : 'applications',
	  description : 'go to application panel page',
	}).commandHandler({
	  commandId : 'ava.admin.app',
	  handle : function () {
		  return $state.go('admin.app');
	  }
	}).command({
	  id : 'ava.admin.codec',
	  label : 'codecs',
	  description : 'go to codec panel page',
	}).commandHandler({
	  commandId : 'ava.admin.codec',
	  handle : function () {
		  return $state.go('admin.codec');
	  }
	}).command({
	  id : 'ava.admin.search',
	  label : 'search',
	  description : 'go to search panel page',
	}).commandHandler({
	  commandId : 'ava.admin.search',
	  handle : function () {
		  return $state.go('admin.search');
	  }
	}).command({
	  id : 'ava.admin.backup',
	  label : 'backup',
	  description : 'go to backup panel page',
	}).commandHandler({
	  commandId : 'ava.admin.backup',
	  handle : function () {
		  return $state.go('admin.backup');
	  }
	})
	/*
	 * help
	 */
	.command({
	  id : 'ava.help',
	  label : 'help',
	  description : 'go to the help page',
	  category : 'help',
	}).commandHandler({
	  commandId : 'ava.help',
	  handle : function () {
		  return $state.go('help.main');
	  }
	});
	
	
	/*
	 * اضافه کردن به منو بقل
	 */
	$menu.add('sidebar', {
	  icon : 'login',
	  command : 'ava.user.login.form'
	}).add('sidebar', {
	  icon : 'logout',
	  command : 'pluf.user.logout'
	}).add('sidebar', {
	  icon : 'account_circle',
	  command : 'ava.user.profile'
	}).add('sidebar', {
	  icon : 'help',
	  command : 'ava.help',
	}).add('sidebar', {
	  icon : 'settings',
	  command : 'ava.admin.cpanel',
	});
	/*
	 * اضافه کردن به منو اصلی
	 */
	$menu.add('main', {
		command : 'ava.user.login.form'
	}).add('main', {
	  icon : 'exit_to_app',
	  command : 'pluf.user.logout'
	}).add('main', {
	  icon : 'account_circle',
	  command : 'ava.user.profile'
	});
	/*
	 * 
	 */
	$menu.add('cpanel', {
	  icon : 'dashboard',
	  command : 'ava.admin.cpanel',
	}).add('cpanel', {
	  icon : 'search',
	  command : 'ava.admin.search',
	}).add('cpanel', {
	  icon : 'beenhere',
	  command : 'ava.admin.app',
	}).add('cpanel', {
	  icon : 'code',
	  command : 'ava.admin.codec',
	}).add('cpanel', {
	  icon : 'backup',
	  command : 'ava.admin.backup',
	});
});
