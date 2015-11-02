'use strict';

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/welcome');
  $stateProvider.state('welcome', {
    url : '/welcome',
    views : {
      "Header" : {
        templateUrl : '/mwiki/view/header.html',
        controller: 'HeaderController'
      },
      'Body' : {
        templateUrl : '/mwiki/view/welcome.html',
        controller: 'WelcomeController'
      },
      'Footer' : {
        templateUrl : '/mwiki/view/footer.html',
        controller: 'FooterController'
      }
    }
  });

});
