(function () {

    'use strict';

    angular.module('app', []);

}());
(function () {

    'use strict';

    angular.module('app')
           .constant('NG_PATH', {
               DIRECTIVE: 'angular/directive/'
           });

}());
(function () {

    'use strict';

    angular.module('app').controller('AppController', AppController);

    function AppController($scope) {

        $scope.message = 'Hello World';

    }
    AppController.$inject = ['$scope'];

}());
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
    slides.$inject = ['NG_PATH'];

}());