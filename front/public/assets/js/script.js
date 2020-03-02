
$(function() {

    $('.nav-link, .navbar-brand').click(function() {
        var sectionTo = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top
        }, 1000);
        $('.nav-link').removeClass("active");
        $(this).addClass("active");
    });


    AOS.init({
        // Global settings:
        disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 750, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
});


window.addEventListener("load", () => {   
    let burgerContainer = document.querySelector('.burgerMenu');
    let navbarItems = document.querySelector('.navbarItems');
    let bar1 = document.querySelector('.bar1');
    let bar2 = document.querySelector('.bar2');
    let bar3 = document.querySelector('.bar3');
    burgerContainer.addEventListener('click', () => {
        if (!navbarItems.style.transform || navbarItems.style.transform == "translateY(-100%)") {
            navbarItems.style.transform = "translateY(89px)";
            bar2.style.transform = "translateX(100%)";
            bar2.style.opacity = 0;
            bar1.style.transform = "rotate(45deg)";
            bar3.style.transform = "rotate(-45deg)";
        } else {
            navbarItems.style.transform = "translateY(-100%)";
            bar2.style.transform = "translateX(0%)";
            bar2.style.opacity = 1;
            bar1.style.transform = "rotate(0)";
            bar3.style.transform = "rotate(0)";
        }
    })
});


////////////

/* let grid =  document.getElementsByClassName('cardContainer');

Object.keys(grid).forEach((key) => {
    grid[key].addEventListener("click", () => {
        console.log(grid[key].getAttribute('key'));
    });
}); */