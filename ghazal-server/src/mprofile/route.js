'use strict';

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/welcome');
  $stateProvider.state('welcome', {
    url : '/welcome',
    views : {
      "Header" : {
        templateUrl : '/mprofile/view/header.html',
        controller: 'HeaderController'
      },
      'Body' : {
        templateUrl : '/mprofile/view/welcome.html',
        controller: 'WelcomeController'
      },
      'Footer' : {
        templateUrl : '/mprofile/view/footer.html',
        controller: 'FooterController'
      }
    }
  });

});
