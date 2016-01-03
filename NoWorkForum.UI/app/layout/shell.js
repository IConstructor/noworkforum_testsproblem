(function () { 
    'use strict';
    
    var controllerId = 'shell';
    angular.module('forumApp').controller(controllerId,['common',shell]);

    function shell(common) {
        var vm = this;

        activate();
        function activate() {
            common.activateController([], controllerId);
        }
    };
})();