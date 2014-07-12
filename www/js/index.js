(function (angular) {

    'use strict';

    var app = angular.module('lam-test', [
        'ngRoute',
        'ngTouch'
    ]);

    app.config(function appConfig ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        });
    });

    app.run([
        'CordovaService',
        function appRun (CordovaService) {
            CordovaService.initialize();
        }
    ]);

})(window.angular);
