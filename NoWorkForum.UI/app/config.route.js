(function () {
    'use strict';

    var app = angular.module('forumApp');

    // Collect the routes
    app.constant('routes', getRoutes());
    
    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes 
    function getRoutes() {
        return [
             {
                url: '/',
                config: {
                    title: 'noworkforum',
                    templateUrl: 'app/main/main.html',
                    settings: {
                        content: '<i class="fa fa-lock"></i> Main'
                    }
                }
            }
        ];
    }
})();