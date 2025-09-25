/* Your JS here. */
console.log('Hello World!')

//controls moving slides in carousel
let slideIndex = 1;
showSlide(slideIndex);

function moveSlides(n) {
    showSlide(slideIndex += n)
}

function showSlide(n) {
    let i; 
    let slides = document.getElementsByClassName("img-card");
    console.log(slides)
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

//control for opening + closing models 
var modals = document.getElementsByClassName("modal");
var modal_btns = document.getElementsByClassName("model-btn");
var spans = document.getElementsByClassName("close-m");
let i; 
for (let i = 0; i < modals.length; i++) {
    modal_btns[i].onclick = function() {
        modals[i].style.display = "block";
    }
    spans[i].onclick = function() {
        modals[i].style.display = "none";
    }
}

var nav_buttons = document.querySelectorAll('#navb a'); /*getting all navigation buttons to highlight*/
var sections = document.querySelectorAll('[id^="section"]'); //getting all sections (things with id that starts with section)
var nav_bar = document.getElementById('navb');
window.onscroll = function() {
    var scrollY = window.scrollY; 
    var nav_height = nav_bar.offsetHeight; 
    //nav bar resizing 
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("navb").style.padding = "10px";
    } else {
        document.getElementById("navb").style.padding = "30px";
    }
    nav_buttons.forEach(but => but.classList.remove('active'));
    for (let i = sections.length - 1; i >= 0; i--) {
        var cur_top = sections[i].offsetTop;
        if (scrollY + nav_height >= cur_top) {
            var active_link = document.querySelector(`#navb a[href="#${sections[i].id}"]`);
            if (active_link) {
                active_link.classList.add('active');
            }
            break;
        }
    }
}

/* Sources: 
-links for navbar: https://www.geeksforgeeks.org/html/how-to-create-links-to-sections-within-the-same-page-in-html/
-smooth scrolling: https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section1
-carousel: https://www.w3schools.com/howto/howto_js_slideshow.asp
-background image: https://www.w3schools.com/cssref/pr_background-position.php
-modals: https://www.w3schools.com/howto/howto_css_modals.asp
-video background: https://www.w3schools.com/howto/howto_css_fullscreen_video.asp
-nav bar resizing: https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp
*/ 

