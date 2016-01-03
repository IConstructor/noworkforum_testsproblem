(function () {
    'use strict';

    var app = angular.module('forumApp');

    // For use with the HotTowel-Angular-Breeze add-on that uses Breeze

    var config = {
        appErrorPrefix: '[HT Error] ', //Configure the exceptionHandler decorator
        docTitle: 'noworkforum: ',
        version: '2.1.0'
    };

    app.value('config', config);
    
    app.config(['$logProvider', function ($logProvider) {
        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
    }]);
    //#endregion
})();