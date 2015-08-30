(function () {

    'use strict';

    angular.module('app').controller('AppController', AppController);

    function AppController($scope) {

        $scope.message = 'Hello World';

    }

}());