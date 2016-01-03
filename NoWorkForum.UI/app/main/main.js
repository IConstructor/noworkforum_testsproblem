(function () {
    'use strict';
    var controllerId = 'MainController';

    angular.module('forumApp').controller(controllerId, ['common', 'datacontext', MainController]);

        function MainController(common,datacontext) {
            var vm = this;
            vm.activate = activate;
            vm.posts = [];
            vm.title = controllerId;

        activate();
        function activate() {
            common.activateController([getPosts()], controllerId);
        }

        function getPosts(){
            return datacontext.getPostsPartials().success(function (data) {
                common.log(controllerId, "getPostsPartials state-success");
                return vm.posts = data;
            });
        }
 }

})();