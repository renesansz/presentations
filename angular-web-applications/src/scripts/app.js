(function () {

    'use strict';

    var Slider = function () {

        // Constructor
        this.slides = null;
        this.currentSlideIdx = 0;

    };

    Slider.prototype.SetSlides = function (slides) {
        this.slides = slides;
    };

    Slider.prototype.GetSlides = function (slides) {
        return this.slides;
    };
    Slider.prototype.NextSlide = function () {
        console.log('NextSlide');
    };
    Slider.prototype.PrevSlide = function () {
        console.log('PrevSlide');
    };

    /////////////////
    /// APP START ///
    /////////////////

    var slider = new Slider();

    /**
     * Initialize App
     */
    function Initialize() {
        
        GetSlides();
        InitializeKeypressListener();

    }

    /**
     * Initialize Keypress Listener
     */
    function InitializeKeypressListener() {
        console.log(slider);
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
                slider.PrevSlide();
            break;
            case 39: // Right
                slider.NextSlide();
            break;
            case 40: // Down
                console.log('Down');
            break;
            }
        }

        window.onkeydown = Keydown;

    }

    /**
     * Get slide DOM reference
     */
    function GetSlides() {

        var slides = document.getElementsByClassName('slide');

        setTimeout(function () {

            for (var i = 0, limit = slides.length; i < limit; ++i) {
                
                // Set z-index for each slide
                slides[i].style.zIndex = 100 - i;

                // Set opacity for the remaining slides
                if (i > 0) {
                    slides[i].style.opacity = 0;
                    slides[i].style.right = '-100%';
                }

            }

            slider.SetSlides(slides);

        }, 0);

    }

    Initialize();

}());