let menuOpener = document.querySelector(".menuOpener"),
burger = document.querySelector(".menu"),
menuCloser = document.querySelector('.menuCloser');

menuOpener.addEventListener('click', function(){
    burger.classList.toggle('menuClose');
    menuCloser.style.opacity = 1;
    menuCloser.style.visibility = "visible";
    document.body.style.overflow = "hidden";
});
menuCloser.addEventListener('click', function(){
    burger.classList.toggle('menuClose');
    menuCloser.style.opacity = 0;
    menuCloser.style.visibility = "hidden";
    document.body.style.overflow = ""

})