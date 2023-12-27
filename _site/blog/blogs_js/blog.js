let side_menu_toggle = true
function toggle_side_menu(){
    let menu = document.getElementById('menu')
    if (side_menu_toggle){
        menu.style.display = 'none'
        side_menu_toggle = false
    }else{
        menu.style.display = 'block'
        side_menu_toggle = true
    }
    
}