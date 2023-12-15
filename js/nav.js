let nav_dropdown_button = document.getElementById('nav_dropdown_button')
let nav_dropdown = document.getElementById('nav_dropdown_menu')
let nav_dropdown_toogle = false
nav_dropdown_button.addEventListener('click', ()=>{
    let button = nav_dropdown_button.querySelector('ion-icon')
    if (!nav_dropdown_toogle){
        nav_dropdown.style.display = 'flex'
        setTimeout(() => {
            nav_dropdown.style.top = '100%'
        }, 100);
        button.name = 'close'
        nav_dropdown_toogle = true
    }else{
        nav_dropdown.style.top = '-1000%'
        setTimeout(() => {
            nav_dropdown.style.display = 'none'
        }, 500);
        button.name = 'menu'
        nav_dropdown_toogle = false
    }
    
})