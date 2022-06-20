const hamburger = document.querySelector("#hamburger");
const close = document.querySelector(".close");
const navlinks = document.querySelector(".navlinks");

hamburger.addEventListener("click", function () {
   navlinks.classList.add("open");
   document.body.style.overflow = 'hidden'
   
});
close.addEventListener('click', function(){
   navlinks.classList.remove('open')
   document.body.style.overflow = 'auto'
})


