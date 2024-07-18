const hamburgesa = document.querySelector(".header__hamburgesa");
const navLinks = document.querySelector(".header__menu");
const links = document.querySelectorAll(".header__menu li");

hamburgesa.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburgesa Animation
    hamburgesa.classList.toggle("toggle");
});
