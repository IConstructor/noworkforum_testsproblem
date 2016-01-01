(function () {
    'use strict';
    
    var app = angular.module('app', [
        // Angular modules 
        'ngAnimate',        // animations
        'ngRoute',          // routing

        // Custom modules 
        'common',           // common functions, logger, spinner

        // 3rd Party Modules
        'ui.bootstrap'      // ui-bootstrap (ex: carousel, pagination, dialog)
    ]);
    
    // Handle routing errors and success events
    app.run(['$route',  function ($route) {
            // Include $route to kick start the router.
        }]);        
})();