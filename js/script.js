const burger = document.querySelector(".burger");
const activElement = document.querySelectorAll(".active");

burger.addEventListener("click", function() {
    for (let i = 0; i < activElement.length; i++) {
        activElement[i].classList.toggle("off")
    }
})


$('.navi nav ul li').on('click', function() {
    const goToSection = "[data-section=" + $(this).attr('class') + "]";

    console.log(goToSection);

    $('body, html').animate({
        scrollTop: $(goToSection).offset().top

    }, 500)


})