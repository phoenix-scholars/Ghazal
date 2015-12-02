'use strict';

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/welcome');
  $stateProvider.state('welcome', {
    url : '/welcome',
    views : {
      "Header" : {
        templateUrl : '/ghazal-register/view/header.html',
        controller: 'HeaderController'
      },
      'Body' : {
        templateUrl : '/ghazal-register/view/welcome.html',
        controller: 'WelcomeController'
      },
      'Footer' : {
        templateUrl : '/ghazal-register/view/footer.html',
        controller: 'FooterController'
      }
    }
  });

});
