let back_buttons = '#fff'
function contact_app(app, e){
    let screen = document.getElementById('contact_phone_app')

    let img = e.querySelector('img')

    let loading_img = document.createElement('img')
    loading_img.src = img.src
    loading_img.style.width = '50px'
    loading_img.style.height = '50px'
    screen.appendChild(loading_img)



    screen.style.display = 'flex'





    if (app == 'close'){
        screen.style.display = 'none'
        document.getElementById('contact_phone_buttons').style.color = back_buttons
    }
}
