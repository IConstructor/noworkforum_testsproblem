(function () {
    'use strict';
    var controllerId = 'MainController';

    angular.module('app').controller(controllerId,
        ['$scope', 'common', MainController]);

        function MainController ($scope,common) {

        var vm = this;
        vm.title = 'Main';

        
        activate();
        function activate() {
            $scope.rowCollection = [
       { Author: 'Anton', Subject: 'Buy a notebook DELL', Date: new Date('1987-05-21'), Groups: ["Kydriashova 14", "Zhulianskaia", "Fiskulturi"], Tags: ["[SELL]", "[SPAM]"] },
          { Author: 'Anton', Subject: 'Buy a notebook DELL', Date: new Date('1987-05-21'), Groups: ["Kydriashova 14", "Zhulianskaia", "Fiskulturi"], Tags: ["[SELL]", "[SPAM]"] }
            ];

            common.activateController([], controllerId);
        }
 }

})();