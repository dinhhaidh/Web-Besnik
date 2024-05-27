$(document).ready(function(){
    $("#nav-toggle").click(function(){
        $("#nav-menu").addClass("show-menu")
    });
    $("#nav-close").click(function(){
        $("#nav-menu").removeClass("show-menu")
    });
    $(".nav-link").click(function(){
        $("#nav-menu").removeClass("show-menu")
    });

    $(window).scroll(function(){
        $("#header").toggleClass("scroll-header", $(this).scrollTop() >=50);
    })
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // animations repeat
})
sr.reveal(`.home-top`)
sr.reveal(`.home__images`,{delay: 600})
sr.reveal(`.home-icon1,.review-main,.about-content,.testmonials-content`,{interval: 600})
sr.reveal(`.home-contents,.newsleter-data,.section-heading,.testmonials-text,.laibrary-content,.laibrary-list`,{origin: 'left'})
sr.reveal(`.newsletter-warning,.testmonials-title,.laibrary-image,.title`,{origin: 'right'})
sr.reveal(`.home-auth,.laibrary-contents,.footer-container`,{origin: 'bottom'})