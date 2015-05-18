 var loginApp = angular.module("loginApp", ['ngRoute']);

 loginApp.config(['$routeProvider',
     function($routeProvider) {
         $routeProvider.
         when('/mrplogin', {
             templateUrl: 'tpl/login.html',
             controller: 'LoginController'
         }).
         when('/mrpregistration', {
             templateUrl: 'tpl/registration.html',
             controller: 'RegistrationController'
         }).
         otherwise({
             redirectTo: '/mrplogin'
         });
     }
 ]);
  

 loginApp.controller('LoginController', function($rootScope, $scope) { });
 loginApp.controller('RegistrationController', function($rootScope, $scope) { });