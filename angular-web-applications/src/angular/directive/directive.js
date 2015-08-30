(function () {

    'use strict';

    angular.module('app').directive('slides', slides);

    function slides(NG_PATH) {

        return {
            restrict: 'EA',
            templateUrl: NG_PATH + 'view.html',
            link: _Link
        };

        /**
         * Directive Controller
         */
        function _Link() {
        }

    }

}());