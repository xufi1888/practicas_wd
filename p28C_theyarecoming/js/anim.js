const menuBtn = document.querySelector('.menu-bar-options-mobile')
const menuResponsive = document.querySelector('.menu-bar-options-list-container-mobile')

menuBtn.addEventListener('click', function(){
    menuResponsive.classList.toggle('is-active'); 
})