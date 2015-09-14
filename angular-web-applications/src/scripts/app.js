(function () {

    'use strict';

    ////////////////////
    /// Slider Model ///
    ////////////////////

    var Slider = function () {

        // Constructor
        this.slides = null;
        this.currentSlideIdx = 0;
        this.isAnimating = false;

    };

    Slider.prototype.SetSlides = function (slides) {
        this.slides = slides;
    };
    Slider.prototype.GetSlides = function (slides) {
        return this.slides;
    };
    Slider.prototype.NextSlide = function () {

        var vm = this;

        if (vm.currentSlideIdx === (vm.slides.length - 1) || vm.isAnimating)
            return;

        vm.isAnimating = true;

        var tl = new TimelineLite();
        var nextSlide = $(vm.slides[vm.currentSlideIdx + 1]);
        var currSlide = $(vm.slides[vm.currentSlideIdx]);
        var nextSlideContent = $(nextSlide).find('.transition-text');
        var currSlideContent = $(currSlide).find('.transition-text');

        tl.fromTo(currSlideContent, 0.5, { left: 0, opacity: 1, ease: Expo.easeInOut }, { left: '-15%', opacity: 0, ease: Expo.easeInOut })
          .fromTo(currSlide, 0.5, { opacity: 1, display: 'block', ease: Expo.easeInOut }, { opacity: 0, display: 'none', ease: Expo.easeInOut }, 0)
          .fromTo(nextSlideContent, 0.8, { right: '-15%', opacity: 0, ease: Expo.easeInOut }, { right: 0, opacity: 1, ease: Expo.easeInOut }, 0)
          .fromTo(nextSlide, 0.8, { opacity: 0, display: 'none', ease: Expo.easeInOut }, { right: 0, opacity: 1, display: 'block', ease: Expo.easeInOut }, 0.7)
          .eventCallback('onComplete', function () {
            vm.isAnimating = false;
            vm.currentSlideIdx += 1;
          });

        console.log('NextSlide');

    };
    Slider.prototype.PrevSlide = function () {

        var vm = this;
        
        if (vm.currentSlideIdx === 0 || vm.isAnimating)
            return;

        vm.isAnimating = true;

        var tl = new TimelineLite();
        var nextSlide = $(vm.slides[vm.currentSlideIdx - 1]);
        var currSlide = $(vm.slides[vm.currentSlideIdx]);
        var nextSlideContent = $(nextSlide).find('.transition-text');
        var currSlideContent = $(currSlide).find('.transition-text');

        tl.fromTo(currSlideContent, 0.5, { right: 0, opacity: 1, ease: Expo.easeInOut }, { right: '-15%', opacity: 0, ease: Expo.easeInOut })
          .fromTo(currSlide, 0.5, { opacity: 1, display: 'block', ease: Expo.easeInOut }, { opacity: 0, display: 'none', ease: Expo.easeInOut }, 0)
          .fromTo(nextSlideContent, 0.8, { left: '-15%', opacity: 0, ease: Expo.easeInOut }, { left: 0, opacity: 1, ease: Expo.easeInOut })
          .fromTo(nextSlide, 0.8, { opacity: 0, display: 'none', ease: Expo.easeInOut }, { opacity: 1, display: 'block', ease: Expo.easeInOut })
          .eventCallback('onComplete', function () {
            vm.isAnimating = false;
            vm.currentSlideIdx -= 1;
          });
        
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

                // Set z-index for each slide from top to bottom.
                slides[i].style.zIndex = 100 - i;

                // Hide other slides
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