(function () { 
    'use strict';
    
    var controllerId = 'shell';
    angular.module('app').controller(controllerId,
        ['$rootScope', 'common', shell]);

    function shell($rootScope, common) {

        var vm = this;

        activate();
        function activate() {
            common.activateController([], controllerId);
        }
    };
})();