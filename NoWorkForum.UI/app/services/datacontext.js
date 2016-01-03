(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('forumApp').factory(serviceId, ['common', datacontext]);

    function datacontext(common) {

        var $http = common.$http;
        var service = {
            getPostsPartials : getPostsPartials
        };

        return service;

        function getPostsPartials() {
            return $http({ method: 'GET', url: 'http://www.filltext.com/?rows=11&pretty=true&Author={firstName}&Subject={Buy%20a%20notebook}&Date={date}&Groups={stringArray}&Tags={stringArray}' });
        }
    }
})();