'use strict';

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/welcome');
  $stateProvider.state('welcome', {
    url : '/welcome',
    views : {
      "Header" : {
        templateUrl : '/main/view/header.html',
        controller: 'HeaderController'
      },
      'Body' : {
        templateUrl : '/main/view/welcome.html',
        controller: 'WelcomeController'
      },
      'Footer' : {
        templateUrl : '/main/view/footer.html',
        controller: 'FooterController'
      }
    }
  });

});
