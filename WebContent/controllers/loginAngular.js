/**
 * @description This is angular app for login and registration of user.
 * @class mrp_app.loginApp
 * @memberOf mrp_app    
 * @author farah
 */ 
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

/**
 * @description This is angular controller for login user.
 * @class mrp_app.loginApp.LoginController
 */
loginApp.controller('LoginController', function($rootScope, $scope) {});

/**
 * @description This is angular controller for registration of user.
 * @class mrp_app.loginApp.RegistrationController
 */
loginApp.controller('RegistrationController', function($rootScope, $scope) {});