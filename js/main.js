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

function clear_form(e){
    /**
     * Clearing the forms after submission.
     * When the user has typed their message, we may not want to clear what they have painstakingly written
     * So we clear everything but the value of the textareas.
     * This way we don't get multiple mistake submissions because they would have to refill the other fields to submit again
     */
    let textarea_element = e.querySelectorAll('textarea')
    let textarea_values = []
    for (let elem of textarea_element){
        textarea_values.push(elem.value)
    }
    e.submit();
    setTimeout(() => {
        e.reset()  
        for (let i = 0; i < textarea_element.length; i++){
            textarea_element[i].value = textarea_values[i]
        }
    }, 1000);
}