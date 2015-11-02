'use strict';

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/welcome');
  $stateProvider.state('welcome', {
    url : '/welcome',
    views : {
      "Header" : {
        templateUrl : '/ghazal-user/view/header.html',
        controller: 'HeaderController'
      },
      'Body' : {
        templateUrl : '/ghazal-user/view/welcome.html',
        controller: 'WelcomeController'
      },
      'Footer' : {
        templateUrl : '/ghazal-user/view/footer.html',
        controller: 'FooterController'
      }
    }
  });

});
