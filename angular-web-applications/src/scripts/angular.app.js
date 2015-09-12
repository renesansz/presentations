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

            var currSlideIdx = 0;
            var slides = $scope.slides = [];

            function NextSlide () {

                if (currSlideIdx === (slides.length - 1))
                    return;

                currSlideIdx++;
                console.log(slides[currSlideIdx].title);
                $scope.select(slides[currSlideIdx]);

            }

            function PreviousSlide () {

                if (currSlideIdx === 0)
                    return;

                currSlideIdx--;
                console.log(slides[currSlideIdx].title);
                $scope.select(slides[currSlideIdx]);

            }

            /**
             * Display the selected slide.
             * 
             * @param  {Object} slide
             */
            $scope.select = function (slide) {
                
                // Reset selected slide
                angular.forEach(slides, function(slide){
                    slide.selected = false;
                });

                // Set new slide
                slide.selected = true;

                // Set window title
                document.title = 'DevCon - Web Apps w/ Angular JS | ' + slide.title;

            };

            /**
             * Add slide to current index.
             * 
             * @param {Object} newSlide
             */
            this.AddSlide = function (newSlide) {
                
                newSlide.idx = $scope.slides.length;

                // Set initial slide
                if ($scope.slides.length === 0)
                    $scope.select(newSlide);

                $scope.slides.push(newSlide);

            };

            /**
             * Function: Keydown
             *
             * Manipulate keypress actions.
             *
             * Parameters:
             *     (Object) evt - Keydown object
             *
             * Returns:
             *     null
             */
            function Keydown(evt) {
                switch (evt.keyCode) { // keyCode source: http://www.asquare.net/javascript/tests/KeyCode.html
                case 38: // Up
                    console.log('Up');
                break;
                case 37: // Left
                    console.log('Left');
                    PreviousSlide();
                break;
                case 39: // Right
                    console.log('Right');
                    NextSlide();
                break;
                case 40: // Down
                    console.log('Down');
                break;
                }
            }

            window.onkeydown = Keydown;

        }

    }
    slides.$inject = ['NG_PATH'];

    function slideItem(NG_PATH) {

        return {
            require: '^slides',
            restrict: 'E',
            transclude: true,
            scope: { title: '@' },
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