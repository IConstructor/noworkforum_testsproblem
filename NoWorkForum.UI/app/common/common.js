(function () {
    'use strict';

    var commonModule = angular.module('common', []);

    // Must configure the common service and set its 
    // events via the commonConfigProvider
    commonModule.provider('commonConfig', function () {
        this.config = {
            // These are the properties we need to set
            //controllerActivateSuccessEvent: '',
        };

        this.$get = function () {
            return {
                config: this.config
            };
        };
    });

    commonModule.factory('common',
        ['$q', '$rootScope', '$timeout',"$log","$http", 'commonConfig', common]);

    function common($q, $rootScope, $timeout,$log,$http, commonConfig) {
        var throttles = {};

        var service = {
            // common angular dependencies
            $broadcast: $broadcast,
            $q: $q,
            $timeout: $timeout,
            $http : $http,
            // generic
            activateController: activateController,
            isNumber: isNumber,
            log: log, 
            textContains: textContains
        };

        return service;

        function log(controllerId, message)
        {
            $log.info("[" + controllerId + "]: " + message)
        }

        function activateController(promises, controllerId) {
            return $q.all(promises).then(function (eventArgs) {
                var data = { controllerId: controllerId };
                $broadcast(commonConfig.config.controllerActivateSuccessEvent, data);
                log(controllerId, "Controller activated");
            });
        }

        function $broadcast() {
            return $rootScope.$broadcast.apply($rootScope, arguments);
        }

        function isNumber(val) {
            // negative or positive
            return /^[-]?\d+$/.test(val);
        }

        function textContains(text, searchText) {
            return text && -1 !== text.toLowerCase().indexOf(searchText.toLowerCase());
        }
    }
})();