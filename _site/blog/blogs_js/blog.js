let side_menu_toggle = true
if (window.innerWidth < 600){
    side_menu_toggle = false
}
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




let light_dark_toogle = true

function light_dark(e=false){
    if (light_dark_toogle){
        document.documentElement.style.setProperty('--ma-bg', '#0c0610')
        document.documentElement.style.setProperty('--su-bg', '#ffffff')
        document.documentElement.style.setProperty('--txt-color4', '#bbb')
        document.documentElement.style.setProperty('--txt-color3', '#ccc')
        document.documentElement.style.setProperty('--txt-color2', '#ddd')
        document.documentElement.style.setProperty('--txt-color1', '#eee')
        document.documentElement.style.setProperty('--border-color', '#444')
        light_dark_toogle = false
        if (e){
            e.querySelector('p').innerText = 'Light mode'
            e.querySelector('ion-icon').name = 'sunny-outline'
        }
        
    }else{
        document.documentElement.style.setProperty('--ma-bg', '#ffffff')
        document.documentElement.style.setProperty('--su-bg', '#0c0610')
        document.documentElement.style.setProperty('--txt-color4', '#444')
        document.documentElement.style.setProperty('--txt-color3', '#333333')
        document.documentElement.style.setProperty('--txt-color2', '#222222')
        document.documentElement.style.setProperty('--txt-color1', '#1f1f1f')
        document.documentElement.style.setProperty('--border-color', '#ddd')
        if (e){
            e.querySelector('p').innerText = 'Dark mode'
            e.querySelector('ion-icon').name = 'moon-outline'
        }
        light_dark_toogle = true
    }
}


let auto_scroll_on = false
function auto_scroll_page(e=false){
    if (auto_scroll_on){
        clearInterval(auto_scroll_on)
        auto_scroll_on = false
        if (e){
            e.querySelector('p').innerText = 'Auto Scroll'
            e.querySelector('ion-icon').name = 'play-circle-outline'
        }
    }
    else{
        auto_scroll_on = setInterval(() => {
            window.scrollBy(0, 1)
        }, 70);
        if (e){
            e.querySelector('p').innerText = 'Stop Auto Scroll'
            e.querySelector('ion-icon').name = 'stop-circle-outline'
        }
    }
    
}