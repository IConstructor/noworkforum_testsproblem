(function () {
    'use strict';
    var controllerId = 'MainController';

    angular.module('app').controller(controllerId, ['common',"datacontext", MainController]);

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
                common.log(controllerId, data);
                return vm.posts = data;
            });
            //vm.topics = [
            //{ Author: 'Anton', Subject: 'Buy a notebook DELL', Date: new Date('1987-05-21'), Groups: ["Kydriashova 14", "Zhulianskaia", "Fiskulturi"], Tags: ["[SELL]", "[SPAM]"] },
            //{ Author: 'Anton', Subject: 'Buy a notebook DELL', Date: new Date('1987-05-21'), Groups: ["Kydriashova 14", "Zhulianskaia", "Fiskulturi"], Tags: ["[SELL]", "[SPAM]"] }
            //];
        }
 }

})();