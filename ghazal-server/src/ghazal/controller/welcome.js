'use strict';

app.controller('WelcomeController', function($scope, $tenant,
        PaginatorParameter) {
  $scope.param = new PaginatorParameter();
  $tenant.session().then(function(tenant) {
    return tenant.apps($scope.param);
  }).then(function(apps) {
    $scope.apps = apps;
  });
});
