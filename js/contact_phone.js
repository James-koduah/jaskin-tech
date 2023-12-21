let back_buttons = '#fff'
function contact_app(app){
    let screen = document.getElementById('contact_phone_app')
    screen.style.display = 'flex'
    if (app == 'phone'){
        screen.style.background = '#f7f7f7'
        document.getElementById('contact_phone_buttons').style.color = '#000'
        screen.innerHTML = `
        <header>Contacts</header>
        <p>(+233) 20 465 5978</p>
        `

    }
    if (app == 'close'){
        screen.style.display = 'none'
        document.getElementById('contact_phone_buttons').style.color = back_buttons
    }
}
