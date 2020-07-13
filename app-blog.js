const selector = document.querySelectorAll('.post')
console.log(selector);
for (let i = 0; i < selector.length; i++){
	selector[i].classList.add('magictime', 'vanishIn');
}

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function(){
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains('active-menu')) {
        mainMenu.classList.add("active-menu")
    } else {
        mainMenu.classList.remove("active-menu");
    }
})