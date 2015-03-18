'use strict';

var slides = document.getElementsByClassName('slide');
var currentSlide = 0;
var isAnimating = false;

_Intitialize();

/**
 * =======================
 *  FUNCTION DEFINITIONS
 * =======================
 */

/**
 * Function: Initalize
 *
 * App Initializer
 */
function _Intitialize() {
    for (var i = 0, limit = slides.length; i < limit; i++) {
        slides[i].style.zIndex = slides.length - i;
    }
}

/**
 * Function: ShowSample
 */
function ShowSample() {
    slides[currentSlide].children[1].style.display = 'block';
}

/**
 * Function: HideSample
 */
function HideSample() {   
    slides[currentSlide].children[1].style.display = 'none';
}

/**
 * Function: NextSlide
 */
function _NextSlide() {
    if (currentSlide === (slides.length - 1)) {
        return;
    }

    TweenLite.to(slides[currentSlide], 0.4, {
        left: '-100px',
        ease: 'easeInExpo',
        display: 'none',
        opacity: 0,
        onComplete: function() {
            currentSlide++;
            isAnimating = false;
        }
    });
}

/**
 * Function: PrevSlide
 */
function _PrevSlide() {
    if ( ! currentSlide) {
        return;
    }

    TweenLite.to(slides[--currentSlide], 0.5, {
        left: '0px',
        ease: 'easeOutExpo',
        display: 'block',
        opacity: 1,
        onComplete: function() {
            isAnimating = false;
        }
    });
}

/**
 * Function: ToggleSize
 */
var size = 1;
function ToggleSize() {
    switch(size) {
        case 1:
            TweenLite.to(slides[currentSlide].children[1].children[1], 0.5, {
                width: '992px',
                height: '600px'
            });
            size = 2;
            break;
        case 2:
            TweenLite.to(slides[currentSlide].children[1].children[1], 0.5, {
                width: '776px',
                height: '550px'
            });
            size = 3;
            break;
        case 3:
            TweenLite.to(slides[currentSlide].children[1].children[1], 0.5, {
                width: '1244px',
                height: '620px'
            });
            size = 1;
            break;
    }
}

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
    if (isAnimating) {
        return;
    }
    // keyCode source: http://www.asquare.net/javascript/tests/KeyCode.html
    switch (evt.keyCode) {
        case 38: // Up
        case 37: // Right
            _PrevSlide();
            break;
        case 39: // Left
            _NextSlide();
            break;
        case 40: // Down
            break;
    }
}
window.onkeydown = Keydown;
