(function () {

    // Set to true to show console.log for debugging
    var DEBUG_MODE = true;

    'use strict';

    var Slide = function (title) {

        // Constructor
        this.title = title;
        this.eleRef = null;

    };

    Slide.prototype.SetReference = function (dom) {
        this.eleRef = dom;
    };

    Slide.prototype.MoveLeft = function () {};
    Slide.prototype.MoveRight = function () {};
    Slide.prototype.TransitionLeft = function () {};
    Slide.prototype.TransitionRight = function () {};

    /////////////////
    /// APP START ///
    /////////////////

    var slides = [];
    var currentSlideIdx = 0;

    /**
     * Initialize App
     */
    function Initialize() {
        
        GetSlides();

    }

    /**
     * Get slide DOM reference
     */
    function GetSlides() {

        var slidesDOM = document.getElementsByClassName('slide');

        setTimeout(function () {

            for (var i = 0, limit = slidesDOM.length; i < limit; ++i) {
                
                // Set z-index for each slide
                slidesDOM[i].style.zIndex = 10 + i;

                var newSlide = new Slide(slidesDOM[i].dataset.title);
                    newSlide.SetReference(slidesDOM[i]);

                slides.push(newSlide);

            }

        }, 0);

    }

    Initialize();

}());