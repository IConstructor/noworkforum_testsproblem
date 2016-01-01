(function () {
    'use strict';
    var controllerId = 'MainController';

 var MainController = function($scope) {

        var vm = this;
        vm.title = 'Main';

        
        activate();

        function activate() {
            $scope.rowCollection = [
       { Author: 'Anton', Subject: 'Buy a notebook DELL', Date: new Date('1987-05-21'), Groups: ["Kydriashova 14", "Zhulianskaia", "Fiskulturi"], Tags: ["[SELL]", "[SPAM]"] },
          { Author: 'Anton', Subject: 'Buy a notebook DELL', Date: new Date('1987-05-21'), Groups: ["Kydriashova 14", "Zhulianskaia", "Fiskulturi"], Tags: ["[SELL]", "[SPAM]"] }
            ];
        }
 }

 angular.module('app').controller(controllerId, MainController);
})();