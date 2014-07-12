(function (angular, console) {
    'use strict';

    //
    // DebugService
    //
    // Debugging once on a mobile can be tricky.
    // Need a place where we can enable/disable logging.
    //
    // Cordova provides a way to debug to the Xcode console, we may need that later.
    //
    var app = angular.module('lam-test');

    app.service('DebugService', function DebugService () {
        var module = {
            log: function (text) {
                console.log(text);
            }
        };
        return module;
    });

})(window.angular, window.console);
