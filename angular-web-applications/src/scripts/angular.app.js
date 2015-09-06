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

    angular.module('app')
           .directive('slides', slides)
           .directive('slideItem', slideItem);

    function slides(NG_PATH) {

        _Controller.$inject = ['$scope'];
        return {
            restrict: 'E',
            scope: {},
            transclude: true,
            templateUrl: NG_PATH.DIRECTIVE + 'slides.view.html',
            controller: _Controller
        };

        /**
         * Directive Controller
         */
        function _Controller($scope) {

            $scope.slides = [];

            this.AddSlide = function (newSlide) {
                $scope.slides.push(newSlide);
            };

        }

    }
    slides.$inject = ['NG_PATH'];

    function slideItem(NG_PATH) {

        return {
            require: '^slides',
            restrict: 'E',
            transclude: true,
            scope: {
                title: '=title'
            },
            templateUrl: NG_PATH.DIRECTIVE + 'slideItem.view.html',
            link: _Link
        };

        /**
         * Directive Controller
         */
        function _Link(scope, element, attrs, slides) {
            slides.AddSlide(scope);
        }

    }
    slideItem.$inject = ['NG_PATH'];

}());