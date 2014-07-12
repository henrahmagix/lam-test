(function (document, angular, navigator) {
    'use strict';

    //
    // CordovaService
    //
    // Handles the bridge between native code and AngularJS
    //
    var app = angular.module('lam-test');

    app.service('CordovaService', [
        'DebugService',
        '$rootScope',
        function CordovaService (DebugService, $rootScope) {

            var module = {
                cordovaInitialised: false,

                // Application Constructor
                initialize: function () {
                    if (angular.isDefined(window.cordova)) {
                        module.setIsCordova();
                    }

                    this.bindEvents();
                },

                // Bind Event Listeners
                //
                // Bind any events that are required on startup. Common events are:
                // 'load', 'deviceready', 'offline', and 'online'.
                bindEvents: function () {
                    document.addEventListener('deviceready', this.onDeviceReady, false);
                },

                // deviceready Event Handler
                //
                // The scope of 'this' is the event. In order to call the 'receivedEvent'
                // function, we must explicity call 'app.receivedEvent(...);'
                onDeviceReady: function () {
                    module.cordovaInitialised = true;

                    DebugService.log('Device Ready');
                    module.receivedEvent('deviceready');
                },

                // Update DOM on a Received Event
                receivedEvent: function (id) {
                    DebugService.log('Received Event: ' + id);

                    $rootScope.isCordovaInitialised = true;
                },

                setIsCordova: function () {
                    $rootScope.isCordova = true;

                    if (navigator.userAgent.match(/iP[ha][od].*OS 7/)) {
                        $rootScope.isIos7 = true;
                    }
                }
            };

            return module;

        }
    ]);

})(window.document, window.angular, window.navigator);
