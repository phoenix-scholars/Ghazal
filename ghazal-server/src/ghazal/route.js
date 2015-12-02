'use strict';

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/welcome');
  $stateProvider.state('welcome', {
    url : '/welcome',
    views : {
      "Header" : {
        templateUrl : '/ghazal/view/header.html',
        controller: 'HeaderController'
      },
      'Body' : {
        templateUrl : '/ghazal/view/welcome.html',
        controller: 'WelcomeController'
      },
      'Footer' : {
        templateUrl : '/ghazal/view/footer.html',
        controller: 'FooterController'
      }
    }
  });

});
